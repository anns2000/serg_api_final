const socialActivities = require("../models/socialActivities.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const myHandler=require('./handlers')

module.exports.addActivities=myHandler.addOne(socialActivities)
module.exports.updateActivities=myHandler.updateOne(socialActivities)
module.exports.deleteActivities=myHandler.deleteOne(socialActivities)
module.exports.gellAllActivitiess=myHandler.getALL(socialActivities)
module.exports.getOneById=myHandler.getOneById(socialActivities)
module.exports.deleteList=myHandler.deleteListbyId(socialActivities)