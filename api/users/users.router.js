const { Router } = require('express');
const usersModel = require('./users.model');
const usersValidator = require('./users.validator');
const checkUrl = require('../helpers/check.url');

const userRouter = Router();

userRouter
.get('/', checkUrl, usersModel.sendUsers)
.get('/:id', usersValidator.sendUserId, usersModel.sendUserId);

module.exports = userRouter;
