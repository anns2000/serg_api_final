
const myHandler= require('../services/handlers')
const jornModel=require('../models/jorn.models')
module.exports.addJorn=myHandler.addOne(jornModel)
module.exports.updateJorn=myHandler.updateOne(jornModel)
module.exports.deleteJorn=myHandler.deleteOne(jornModel)
module.exports.getAllJorn=myHandler.getALL(jornModel)
module.exports.gellAllInternationalConf=myHandler.getALL(jornModel)
