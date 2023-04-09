const InternationalConfModel = require("../models/InternationalConf.model");
const myHandler=require('./handlers')
module.exports.addInternationalConf=myHandler.addOne(InternationalConfModel)
module.exports.updateInternationalConf=myHandler.updateOne(InternationalConfModel)
module.exports.deleteInternationalConf=myHandler.deleteOne(InternationalConfModel)
module.exports.gellAllInternationalConf=myHandler.getALL(InternationalConfModel)

 // to get all InternationalConf belongs to an category

