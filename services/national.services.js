const nationalModel = require("../models/national.model");
const myHandler=require('./handlers')

module.exports.addNational=myHandler.addOne(nationalModel)
module.exports.updateNational=myHandler.updateOne(nationalModel)
module.exports.deleteNational=myHandler.deleteOne(nationalModel)
module.exports.deleteList=myHandler.deleteListbyId(nationalModel)
module.exports.gellAllNational=myHandler.getALL(nationalModel)
