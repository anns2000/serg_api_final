const newsModel = require("../models/news.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const myHandler=require('./handlers')

module.exports.addnews=myHandler.addOne(newsModel)
module.exports.updatenews=myHandler.updateOne(newsModel)
module.exports.deletenews=myHandler.deleteOne(newsModel)
module.exports.gellAllnews=myHandler.getALL(newsModel)
module.exports.getOneById=myHandler.getOneById(newsModel)
module.exports.deleteList=myHandler.deleteListbyId(newsModel)