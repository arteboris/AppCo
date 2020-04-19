const fs = require('fs');
const path = require('path');
const moment = require('moment');
const UsersController = require('./users.controller');

const filePathUsers = path.join(__dirname, '../', 'db/', 'users.json');
const filePathUsersStatistic = path.join(__dirname, '../', 'db/', 'users_statistic.json');

class UsersModel {
  constructor() {}

  get sendUsers() {
    return this._sendUsers.bind(this);
  }

  async _sendUsers(req, res, next) {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const last_name = req.query.last_name;
    const clicks = req.query.clicks;
    const page_views = req.query.page_views;

    try {
      fs.readFile(filePathUsers, 'utf8', (err, data) => {
        if (err)
          throw err;
        const users = JSON.parse(data);
        fs.readFile(filePathUsersStatistic, 'utf8', (err, content) => {
          if (err)
            throw err;
          const statistic = JSON.parse(content);

          UsersController.sendUsers(users, statistic, page, limit, last_name, clicks, page_views, res);
        });
      })
    } catch(err) {
      throw err;
    }
  }

  get sendUserId() {
    return this._sendUserId.bind(this);
  }

  async _sendUserId(req, res, next) {
    const id = Number(req.params.id);
    const period = req.query.period;
    let dateFrom;
    let dateTo;

    if(period) {
      dateFrom = period.split(',')[0];
      dateTo = period.split(',')[1];
    }

    try{

      await fs.readFile(filePathUsersStatistic, 'utf8', (err, content) => {
        if (err) throw err;
        const statistic = JSON.parse(content);

        UsersController.sendUserId(id, statistic, dateFrom, dateTo, res);
      });

    } catch(err) {
      throw err;
    }

  }
}

module.exports = new UsersModel();
