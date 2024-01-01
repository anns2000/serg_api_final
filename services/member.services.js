const memberModel = require("../models/members.model");
const myHandler=require('./handlers')
const asyncHandler = require('express-async-handler');
const cloudinary=require('cloudinary');
cloudinary.config({
  cloud_name: "donwkw0ny",
  api_key: "948569869913115",
  api_secret: "YVQgJVnpcyBd0z2_OT_1RN2t7uI"
});

module.exports.addMember=myHandler.addOne(memberModel)
module.exports.updateMember=myHandler.updateOne(memberModel)
module.exports.deleteMember=myHandler.deleteOne(memberModel)
module.exports.getAllMembers=myHandler.getALL(memberModel)
module.exports.deleteList=myHandler.deleteListbyId(memberModel)
module.exports.getOneById=myHandler.getOneById(memberModel)

