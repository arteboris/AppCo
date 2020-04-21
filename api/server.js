const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const mainRoute = require('./main/main');
const usersRouter = require('./users/users.router');

function initMiddleware(app) {
  app.use(express.json());
  app.use(cors());
}

function initRouters(app) {
  app.use('/', mainRoute);
  app.use('/users', usersRouter);
  app.use('/*', (req, res, next) => {
    res.status(404).json('SmartBin: Invalid URL, Check Api')
  });
}

async function init() {
  const app = express();

  await config.db;

  initMiddleware(app);
  initRouters(app);

  app.listen(config.port);
}

init();
