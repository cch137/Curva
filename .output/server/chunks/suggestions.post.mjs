import { defineEventHandler, readBody } from 'h3';
import { e as evo } from './index4.mjs';
import './index2.mjs';
import 'dotenv';
import 'sequelize';
import './createAxiosSession.mjs';
import 'axios';
import 'cookie';
import './index3.mjs';
import 'crypto';
import 'url';
import 'bson';
import 'timers';
import 'util';
import 'stream';
import 'events';
import 'dns';
import 'fs';
import 'mongodb-connection-string-url';
import 'os';
import 'process';
import 'zlib';
import 'net';
import 'socks';
import 'tls';
import 'http';
import 'mongoose';
import './str.mjs';
import './log.mjs';
import './crawler.mjs';
import 'turndown';
import '@joplin/turndown-plugin-gfm';
import 'cheerio';
import 'googlethis';
import './sogouTranslate.mjs';
import 'crypto-js/md5.js';
import './message.mjs';

const suggestions_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const question = body == null ? void 0 : body.question;
  const amout = (body == null ? void 0 : body.amout) || void 0;
  if (typeof question !== "string") {
    return { error: 1 };
  }
  return await evo.suggestions(question, amout);
});

export { suggestions_post as default };
//# sourceMappingURL=suggestions.post.mjs.map
