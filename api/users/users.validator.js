const validator = require('node-validator');

class UsersValidator {
  constructor() {}

  get sendUserId() {
    return this._sendUserId.bind(this);
  }

  async _sendUserId(req, res, next) {
    const id = Number(req.params.id);
    const period = req.query.period;
    const url = req.url;

    if(!url.includes('?') && id > 0 && id <= 1000) {
      return next();
    }

    let dateFrom;
    let dateTo;

    if(period) {
      dateFrom = period.split(',')[0];
      dateTo = period.split(',')[1];
    }

    if(dateFrom > dateTo) return res.status(404).json('SmartBin: Invalid URL, Check period');
    const toValidate = {
      id,
      dateFrom,
      dateTo,
    };

    const rules = validator.isObject()
    .withRequired("id", validator.isNumber({min: 1, max: 1000}))
    .withRequired("dateFrom", validator.isIsoDate())
    .withRequired("dateTo", validator.isIsoDate());

    validator.run(rules, toValidate, (errCount, errors) => {
      if(errCount) return res.status(400).json(errors);

      return next();
    })
  }

}

module.exports = new UsersValidator();
