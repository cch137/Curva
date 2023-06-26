import { defineEventHandler, readBody } from 'h3';
import { d as discordBot } from './index.mjs';
import { m as mindsdb } from './index2.mjs';
import 'discord.js';
import './index3.mjs';
import 'dotenv';
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
import './message.mjs';
import './deleteConversation.mjs';
import 'sequelize';
import './createAxiosSession.mjs';
import 'axios';
import 'cookie';
import './str.mjs';
import './log.mjs';

const admin_post = defineEventHandler(async function(event) {
  const body = await readBody(event);
  const password = body == null ? void 0 : body.passwd;
  if (password !== process.env.ADMIN_PASSWORD) {
    return null;
  }
  const t0 = Date.now();
  const action = body == null ? void 0 : body.action;
  switch (action) {
    case "DC0":
      discordBot.disconnect();
      break;
    case "DC1":
      await discordBot.connect();
      break;
    case "WEBCONN":
      mindsdb.defaultConnectMethod = "WEB";
      break;
    case "SQLCONN":
      mindsdb.defaultConnectMethod = "SQL";
      break;
    case "RESTART":
      await mindsdb.restart();
      break;
  }
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        mdbConnectMethod: mindsdb.defaultConnectMethod,
        dcBotConnected: discordBot.connected,
        pass: true
      });
    }, Math.max(0, t0 - Date.now() + 500));
  });
});

export { admin_post as default };
//# sourceMappingURL=admin.post.mjs.map
