const moment = require('moment');

class UsersController {
  constructor() {}

  get sendUsers() {
    return this._sendUsers.bind(this);
  }

  async _sendUsers(users, statistic, page, limit, last_name, clicks, page_views, res) {
    const totalUsersWithStatistic = users.map(user => {
      user.clicks =  statistic.filter(elem => elem.user_id === user.id)
      .reduce((acc, el) => {
        return acc + el.clicks;
      }, 0);
      user.page_views = statistic.filter(elem => elem.user_id === user.id)
      .reduce((acc, el) => {
        return acc + el.page_views;
      }, 0);
      return user;
    });

    const total = Math.ceil(totalUsersWithStatistic.length/limit);

    if(page && limit) {
      const indexOfLastUsers = page * limit;
      const indexOfFirstUsers = indexOfLastUsers - limit;
      if (last_name) {
        if(last_name === "ascending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => a.last_name > b.last_name ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});
        } else if(last_name === "descending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => b.last_name > a.last_name ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});
        }

      } else if (clicks) {
        if(clicks === "ascending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => a.clicks > b.clicks ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});

        } else if(clicks === "descending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => b.clicks > a.clicks ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});

        }
      } else if (page_views) {
        if(page_views === "ascending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => a.page_views > b.page_views ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});

        } else if(page_views === "descending") {
          const data = totalUsersWithStatistic
          .sort((a, b) => b.page_views > a.page_views ? 1:-1)
          .slice(indexOfFirstUsers, indexOfLastUsers)

          return res.status(200).json({status: 'success', total: total, data: data});
        }
      } else {
        const data = totalUsersWithStatistic.slice(indexOfFirstUsers, indexOfLastUsers)
        return res.status(200).json({status: 'success', total: total, data: data});
      }
    } else {
      return res.status(200).json({status: 'success', data: totalUsersWithStatistic});
    }
  }

  get sendUserId() {
    return this._sendUserId.bind(this);
  }

  async _sendUserId(id, statistic, dateFrom, dateTo, res) {
    const data = statistic.filter(elem => elem.user_id === id);

    if(data.length === 0) return res.status(200).json({status: 'success', data: 'no data found'})

    else if(dateFrom && dateTo) {
      const day = 24 * 60 * 60 * 1000;
      const period = [];

      for(let i=moment.utc(dateFrom); i <= moment.utc(dateTo); i+=day) {
        period.push(moment(i).format('YYYY-MM-DD'));
      }

      const dataForPeriod = period.map(elem => data.some(el => elem === el.date) ?
      data.find(e => elem === e.date) : {
        user_id: id,
        date: elem,
        clicks: 0,
        page_views: 0,
      })
      return res.status(200).json({status: 'success', data: dataForPeriod});
    }
    return res.status(200).json({status: 'success', data: data});
  }
};

module.exports = new UsersController();
