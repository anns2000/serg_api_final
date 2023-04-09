const bookModel = require("../models/book.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const myHandler=require('./handlers')

module.exports.addbook=myHandler.addOne(bookModel)
module.exports.updatebook=myHandler.updateOne(bookModel)
module.exports.deletebook=myHandler.deleteOne(bookModel)

module.exports.gellAllbooks=myHandler.getALL(bookModel)
