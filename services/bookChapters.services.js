const { model } = require("mongoose");
const bookChaptersModel = require("../models/bookChapters.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const myHandler=require('./handlers')

module.exports.addbookChapters=myHandler.addOne(bookChaptersModel)
module.exports.updatebookChapters=myHandler.updateOne(bookChaptersModel)
module.exports.deletebookChapters=myHandler.deleteOne(bookChaptersModel)
module.exports.getAll=myHandler.getALL(bookChaptersModel)
module.exports.deleteList=myHandler.deleteListbyId(bookChaptersModel)