const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const ApiFeatures = require("../utils/apiFeatures.JS");
const multer = require("multer")

module.exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.query;
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    else {
      next();

    }

  });
module.exports.updateOne = (Model) => asyncHandler(async (req, res) => {
  const id = req.header('id')
  console.log(id);
  const doc = await Model.findById(id)
  if (doc) {
    await Model.findByIdAndUpdate(id, req.body, { new: true })
    res.json('done')

  }
  else {
    res.json(new ApiError('this document not found', 404))

  }

})
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: "donwkw0ny",
  api_key: "948569869913115",
  api_secret: "YVQgJVnpcyBd0z2_OT_1RN2t7uI"
});


module.exports.addOne = (Model) => asyncHandler(async (req, res, next) => {


  if (req.file) {
    await cloudinary.v2.uploader.upload(req.file.path, async (error, out) => {

      req.body.photo = out.secure_url;
    })
  }
  await Model.insertMany(req.body)

  res.json('document done')


})
module.exports.getALL = (Model) => asyncHandler(async (req, res) => {

  const api = new ApiFeatures(Model.find(), req.query).filter()
    .keyword()
    .paging()
    .sort()
    .fielding();

  const myProdect = await api.myQuery
  res.json(myProdect)
})