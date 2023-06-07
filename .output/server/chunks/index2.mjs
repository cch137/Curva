import { config } from 'dotenv';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { c as createAxiosSession } from './sogouTranslate.mjs';
import './index3.mjs';
import { s as str } from './str.mjs';
import { l as logger, c as crawler } from './crawler.mjs';
import { m as message } from './message.mjs';

let method = "SQL";
const defaultConnectMethod = {
  get() {
    return method;
  },
  set(value) {
    method = value;
    console.log("SET MDB CONNECT METHOD:", method);
  }
};
const clientSet = /* @__PURE__ */ new Set();

config();
const sanitizeAnswer = (answer = "") => {
  return answer == null ? void 0 : answer.replaceAll("\uFFFD", "");
};
class MindsDBClient {
  constructor(email, password, allowedModelNames = [], connectMethod) {
    console.log(`MindsDB logged in with ${email}`);
    this.email = email;
    this.password = password;
    this.allowedModelNames = /* @__PURE__ */ new Set([...allowedModelNames]);
    this.connectMethod = connectMethod;
    this.sqlClient = new MindsDBSqlClient(this);
    this.webClient = new MindsDBWebClient(this);
    clientSet.add(this);
  }
  get client() {
    switch (this.connectMethod || defaultConnectMethod.get()) {
      case "WEB":
        return this.webClient;
      case "SQL":
      default:
        return this.sqlClient;
    }
  }
  async gpt(modelName, question = "Hi", context = "") {
    const result = await this.client.query(modelName, question, context);
    if (typeof (result == null ? void 0 : result.answer) === "string") {
      result.answer = sanitizeAnswer(result.answer);
    }
    return result;
  }
  async restart() {
    return await new Promise(async (resolve, reject) => {
      try {
        await this.sqlClient.login();
        await this.webClient.login();
        resolve(null);
      } catch (err) {
        reject(err);
      }
    });
  }
  async kill() {
    var _a;
    try {
      await ((_a = this.sqlClient.sequelize) == null ? void 0 : _a.close());
    } catch (err) {
      clientSet.delete(this);
    }
  }
}
class _Client {
  get email() {
    return this.parent.email;
  }
  get password() {
    return this.parent.password;
  }
  get allowedModelNames() {
    return this.parent.allowedModelNames;
  }
  constructor(parent) {
    this.parent = parent;
  }
}
class MindsDBSqlClient extends _Client {
  constructor(parent) {
    super(parent);
    this.models = /* @__PURE__ */ new Map();
    this.login();
  }
  async login() {
    const sequelize = new Sequelize(
      "mindsdb",
      this.email,
      this.password,
      {
        host: "cloud.mindsdb.com",
        dialect: "mysql",
        logging: false,
        pool: { min: 8, max: 512 }
      }
    );
    if (this.sequelize) {
      try {
        await this.sequelize.close();
      } catch (err) {
        console.error(err);
      }
    }
    this.sequelize = sequelize;
    this.models.clear();
    this.allowedModelNames.forEach((tableName) => {
      class _Model extends Model {
      }
      _Model.init(
        { answer: { type: DataTypes.STRING, allowNull: false } },
        { sequelize, tableName }
      );
      this.models.set(tableName, _Model);
    });
  }
  async query(modelName, question = "Hi", context = "") {
    var _a;
    try {
      const model = this.models.get(modelName);
      if (!model) {
        throw "Model Not Found";
      }
      const result = await model.findOne({
        attributes: ["answer"],
        where: {
          question: question.replaceAll("'", "`"),
          context: context.replaceAll("'", "`")
        }
      });
      if (result === null) {
        throw Error("Answer Not Found");
      }
      return { answer: result.answer };
    } catch (err) {
      const sqlMessage = (_a = err == null ? void 0 : err.original) == null ? void 0 : _a.sqlMessage;
      return { answer: void 0, sqlMessage };
    }
  }
}
class MindsDBWebClient extends _Client {
  constructor(parent) {
    super(parent);
    this.login();
    setInterval(() => {
      this.login();
    }, 24 * 60 * 60 * 1e3);
  }
  async login() {
    const session = createAxiosSession({
      "Referer": "https://cloud.mindsdb.com/editor"
    });
    await session.post("https://cloud.mindsdb.com/cloud/login", {
      email: this.email,
      password: this.password,
      rememberMe: true
    });
    this.session = session;
  }
  async query(modelName, question = "Hi", context = "") {
    question = question.replaceAll("'", "`");
    context = context.replaceAll("'", "`");
    try {
      if (this.session === void 0) {
        throw "DB Not Connected";
      }
      const res = await this.session.post("https://cloud.mindsdb.com/api/sql/query", {
        query: `SELECT answer FROM mindsdb.${modelName}\r
WHERE question = '${question}' AND context = '${context}'`,
        context: { db: "mindsdb" }
      });
      const data = res.data;
      const answerIndex = data.column_names.indexOf("answer");
      return { answer: data.data[0][answerIndex] };
    } catch (err) {
      logger.create({ type: "error.mindsdb.query", text: str(err) });
      return null;
    }
  }
}
const MindsDBClient$1 = MindsDBClient;

const manager = {
  get defaultConnectMethod() {
    return defaultConnectMethod.get();
  },
  set defaultConnectMethod(value) {
    defaultConnectMethod.set(value);
  },
  async restart() {
    console.log("RESTART MINDSDB CLIENTS");
    try {
      return await Promise.all([...clientSet].map(async (client) => await client.restart()));
    } catch (err) {
      console.error(err);
    }
  },
  getGptQuestionMaxLength(modelName) {
    return modelName.startsWith("gpt3") ? 4096 : 8192;
  },
  createClient(email, password, allowedModelNames = [], connectMethod) {
    return new MindsDBClient$1(email, password, allowedModelNames, connectMethod);
  }
};
const mindsdb = manager;

function saveMessage(user, conv, Q, A, model) {
  return message.create({ user, conv, model, Q, A });
}

async function makeResponse(answer, complete = true, props = {}) {
  try {
    if (!answer) {
      return { error: "Answer Not Found", complete, ...props };
    }
    return { answer, complete, ...props };
  } catch (err) {
    logger.create({ type: "error.makeResponse", text: str(err) });
    return { error: "Request failed", complete, ...props };
  }
}

const endSuffix = "\n-END-";
const endsWithSuffix = (text) => {
  return text.endsWith(endSuffix);
};
const addEndSuffix = (text) => {
  return `${text}${endSuffix}`;
};
const removeEndSuffix = (text) => {
  if (endsWithSuffix(text)) {
    return text.substring(0, text.length - endSuffix.length);
  }
  return text;
};

const round = (num, digits = 0) => {
  digits = digits ** 10;
  return Math.round(num * digits) / digits;
};

function formatDate(date, format = "yyyy-MM-dd HH:mm:ss", isUTC = false) {
  const addLeadingZeros = (val, len = 2) => val.toString().padStart(len, "0");
  const dateProperties = isUTC ? {
    y: date.getUTCFullYear(),
    M: date.getUTCMonth() + 1,
    d: date.getUTCDate(),
    w: date.getUTCDay(),
    H: date.getUTCHours(),
    m: date.getUTCMinutes(),
    s: date.getUTCSeconds(),
    f: date.getUTCMilliseconds()
  } : {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    w: date.getDay(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    f: date.getMilliseconds()
  };
  const T = dateProperties.H < 12 ? "AM" : "PM";
  const _h = dateProperties.H % 12;
  const h = _h === 0 ? 12 : _h;
  format = format.replace(/yyyy/g, str(dateProperties.y)).replace(/yy/g, `${dateProperties.y}`.substring(2, 4)).replace(/y/g, str(dateProperties.y)).replace(/HH/g, addLeadingZeros(dateProperties.H)).replace(/H/g, str(dateProperties.H)).replace(/hh/g, addLeadingZeros(h)).replace(/h/g, str(h)).replace(/mm/g, addLeadingZeros(dateProperties.m)).replace(/m/g, str(dateProperties.m)).replace(/ss/g, addLeadingZeros(dateProperties.s)).replace(/s/g, str(dateProperties.s)).replace(/fff/g, str(round(dateProperties.f))).replace(/ff/g, str(round(dateProperties.f / 10))).replace(/f/g, str(round(dateProperties.f / 100))).replace(/TT/gi, T).replace(/T/gi, T.charAt(0)).replace(/dddd/g, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateProperties.w]).replace(/ddd/g, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dateProperties.w]).replace(/dd/g, addLeadingZeros(dateProperties.d)).replace(/d/g, str(dateProperties.d));
  const formatBefore = format;
  format = format.replace(/MMMM/g, [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][dateProperties.M - 1]).replace(/MMM/g, [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ][dateProperties.M - 1]);
  if (format !== formatBefore) {
    return format;
  }
  return format.replace(/MM/g, addLeadingZeros(dateProperties.M)).replace(/M/g, str(dateProperties.M));
}

function formatUserCurrentTime(userTimeZone = 0) {
  const now = /* @__PURE__ */ new Date();
  return formatDate(new Date(
    now.getTime() + userTimeZone * 60 * 60 * 1e3 - now.getTimezoneOffset() / -60 * 60 * 60 * 1e3
  ), "yyyy-MM-dd ddd HH:mm:ss");
}

function useDefaultTemplate(question, userTimeZone = 0, additionRules = "", addAfter = "") {
  const time = formatUserCurrentTime(userTimeZone);
  return `Your developer: cch137
User current time: ${time}
Strictly adhere to the following rules:
- Add spaces before and after the URL in your answer.
${additionRules}

User question:
${question}

${addAfter}`;
}

function useParseUrlsAndQueries(question, userTimeZone = 0) {
  const time = formatUserCurrentTime(userTimeZone);
  return `User current time: ${time}
Analyze the user question to extract URLs and short phrases that require search engine queries.
You must adhere to the following guidelines:
- Limit the queries to a maximum of 3 short phrases, only conducting necessary searches; otherwise, no action is needed.
- Avoid redundant queries with similar meanings; only search for things or news that you do not know.
- If the inquiry is not in English, ensure at least 1 query phrase is in English.
- URLs should only come from the user question; if a URL is already provided, there is no need to use a search engine unless explicitly requested by the user.
- Your queries should not seek answers that require reflection or summarization; they should serve as references for you.

Consider yourself an API and refrain from making additional comments. You only need to respond with a JSON object in the following format: \`{ "urls": [], "queries": [] }\`

User question:
${question}`;
}

function useSelectSites(question, results, userTimeZone = 0) {
  const time = formatUserCurrentTime(userTimeZone);
  return `User current time: ${time}
Select the websites you need to visit from search engine results to answer user questions.
You must adhere to the following guidelines:
- You have a quota of 8 websites to choose from, but you do not necessarily have to exhaust the quota. Select only the websites that can assist you in providing the answer.
- If it is impossible to determine from the description of website whether it contains useful information, do not choose that website.
- Ensure that the release time of news is relevant to the responses, avoiding outdated information.
Consider yourself an API and refrain from making additional comments. You only need to respond with a JSON array. Each element in the array should be an object with two properties: "url" (string) and "title" (string).

User question:
${question}

Search engine results:
${results}`;
}

function useExtractPage(question, result, userTimeZone = 0) {
  const time = formatUserCurrentTime(userTimeZone);
  return `User current time: ${time}
Summarize the following information for use in responding to user question.
Your responses must adhere to the following guidelines:
- Use references where possible and answer in detail.
- Ensure the overall coherence and consistency of the responses.
- Ensure that the release time of news is relevant to the responses, avoiding outdated information.
- The content may come from web pages, and you should focus on extracting useful information while disregarding potential headers, footers, advertisements, or other irrelevant content.
- Summarize using the language of the data source itself, rather than the language used by the inquirer.
- Avoid mentioning the name of the current web page in the summary.

User question:
${question}

The references:
${result}`;
}

const makeSureUrlsStartsWithHttp = (urls) => {
  return urls.map((url) => url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`);
};
const gpt4ScrapeAndSummary = async (question, url, userTimeZone = 0, delay = 0) => {
  try {
    return await new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        var _a;
        const answer = ((_a = await curva.client.gpt(
          "gpt4_summarizer",
          useExtractPage(
            question,
            (await crawler.scrape(url)).substring(0, 16384),
            userTimeZone
          )
        )) == null ? void 0 : _a.answer) || "";
        resolve(answer);
      }, delay);
    });
  } catch (err) {
    logger.create({ type: "error.advanced.summary", refer: `${question} ${url}`, text: str(err) });
    return "";
  }
};
const addtionalRules = `- Use references where possible and answer in detail.
- Ensure the overall coherence and consistency of the responses.
- Ensure that the release time of news is relevant to the responses, avoiding outdated information.`;
async function advancedAsk(question, context = "", userTimeZone = 0) {
  var _a, _b;
  try {
    let i = 0;
    const question1 = useParseUrlsAndQueries(question, userTimeZone);
    const answer1 = (_a = await curva.client.gpt("gpt4_summarizer", question1)) == null ? void 0 : _a.answer;
    const answer1Json = answer1.substring(answer1.indexOf("{"), answer1.lastIndexOf("}") + 1);
    const { urls: _urls, queries } = JSON.parse(answer1Json);
    const urls = makeSureUrlsStartsWithHttp(_urls);
    const _pages1 = urls.map((url) => gpt4ScrapeAndSummary(question, url, userTimeZone, i += 1e3));
    const summary = (await Promise.all(queries.map((query) => crawler.summarize(query, true, false)))).join("\n\n");
    const question2 = useSelectSites(question, summary, userTimeZone);
    const answer2 = (_b = await curva.client.gpt("gpt4_summarizer", question2)) == null ? void 0 : _b.answer;
    const answer2Json = answer2.substring(answer2.indexOf("["), answer2.lastIndexOf("]") + 1);
    const selectedSites = JSON.parse(answer2Json);
    const selectedSiteUrls = makeSureUrlsStartsWithHttp(selectedSites.map((site) => site.url));
    const _pages2 = selectedSiteUrls.map((url) => gpt4ScrapeAndSummary(question, url, userTimeZone, i += 1e3));
    const pages = [..._pages1, ..._pages2];
    const references = await new Promise(async (resolve, reject) => {
      const results = [];
      setTimeout(() => resolve(results), 5 * 6e4);
      for (const page of pages) {
        page.then((result) => results.push(result)).catch(() => results.push("")).finally(() => {
          if (results.length === pages.length) {
            resolve(results);
          }
        });
      }
    });
    const _references = `Here are references from the internet:
${references.join("\n")}`;
    const finalQuestion = useDefaultTemplate(question, userTimeZone, addtionalRules, _references).substring(0, 16384);
    return { queries, urls, ...await curva.client.gpt("gpt4", finalQuestion, context) };
  } catch (err) {
    logger.create({ type: "error.advanced", text: str(err) });
    return { queries: [], urls: [], answer: void 0 };
  }
}

function extractUrls(text) {
  const urlRegex = /((?:https?:\/\/)(?:www\.)?[a-zA-Z0-9\u4e00-\u9fa5-]+(?:\.[a-zA-Z0-9\u4e00-\u9fa5-]+)+(?:\/[^\s]*)?)/g;
  const matches = text.match(urlRegex);
  if (matches) {
    return matches.map((url) => {
      if (/^https?:\/\//i.test(url)) {
        return url;
      }
      return `http://${url}`;
    });
  } else {
    return [];
  }
}

const _wrapSearchResult = (result) => {
  return result ? `Here are references from the internet. Use only when necessary:
${result}` : "";
};
async function ask(user, conv, modelName = "gpt4", webBrowsing = "BASIC", question, context = "", userTimeZone = 0) {
  var _a;
  let answer;
  let props = {};
  let complete = true;
  const originalQuestion = question;
  if (webBrowsing === "ADVANCED") {
    const advResult = await advancedAsk(question, context, userTimeZone);
    props = { queries: advResult.queries, urls: advResult.urls };
    answer = advResult == null ? void 0 : advResult.answer;
    if (!answer) {
      webBrowsing = "BASIC";
      console.log("DOWNGRADE: ADVANCED => BASE");
    }
  }
  if (webBrowsing === "BASIC" || webBrowsing === "OFF") {
    if (webBrowsing === "BASIC") {
      const urls = extractUrls(question);
      if (urls.length === 0) {
        question = useDefaultTemplate(question, userTimeZone, "", _wrapSearchResult(await crawler.summarize(question)));
      } else {
        const pages = await Promise.all(urls.map((url) => crawler.scrape(url)));
        for (let i = 0; i < urls.length; i++) {
          pages[i] = `${urls[i]}
${pages[i]}`;
        }
        question = useDefaultTemplate(question, userTimeZone, "", "Information from webpages:\n" + pages.join("\n\n---\n\n"));
      }
    } else {
      question = useDefaultTemplate(question, userTimeZone);
    }
    question = addEndSuffix(question);
    question = question.substring(0, mindsdb.getGptQuestionMaxLength(modelName));
    complete = endsWithSuffix(question);
    if (complete) {
      question = removeEndSuffix(question);
    }
    answer = (_a = await curva.client.gpt(modelName, question, context)) == null ? void 0 : _a.answer;
  }
  props.web = webBrowsing;
  const response = await makeResponse(answer, complete, props);
  if (!response.error && answer) {
    saveMessage(user, conv, originalQuestion, answer, modelName);
  }
  return response;
}

const chatModelNames = /* @__PURE__ */ new Set([
  "gpt4",
  "gpt4_t00",
  "gpt4_t01",
  "gpt4_t02",
  "gpt4_t03",
  "gpt4_t04",
  "gpt4_t05",
  "gpt4_t06",
  "gpt4_t07",
  "gpt4_t08",
  "gpt4_t09",
  "gpt4_t10",
  "gpt3",
  "gpt3_t00",
  "gpt3_t01",
  "gpt3_t02",
  "gpt3_t03",
  "gpt3_t04",
  "gpt3_t05",
  "gpt3_t06",
  "gpt3_t07",
  "gpt3_t08",
  "gpt3_t09",
  "gpt3_t10",
  "gpt4_summarizer",
  "gpt4_mixer"
]);
const client = mindsdb.createClient(
  process.env.CHAT_MDB_EMAIL_ADDRESS,
  process.env.CHAT_MDB_PASSWORD,
  chatModelNames
);
const curva = {
  mindsdb,
  client,
  ask
};

export { curva as c, mindsdb as m };
//# sourceMappingURL=index2.mjs.map
