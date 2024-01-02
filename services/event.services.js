const eventModel = require("../models/event.model");
const myHandler=require('./handlers')
module.exports.addevent = myHandler.addOne(eventModel);
module.exports.updateevent = myHandler.updateOne(eventModel);
module.exports.deleteevent = myHandler.deleteOne(eventModel);
module.exports.getAllevents = myHandler.getALL(eventModel);
module.exports.deleteList = myHandler.deleteListbyId(eventModel);
module.exports.getOneById=myHandler.getOneById(eventModel)
