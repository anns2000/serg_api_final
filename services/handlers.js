const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const ApiFeatures = require("../utils/apiFeatures.JS");
const multer = require("multer")
var jwt = require('jsonwebtoken');

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: "donwkw0ny",
  api_key: "948569869913115",
  api_secret: "YVQgJVnpcyBd0z2_OT_1RN2t7uI"
});

// -------------------------------- update ---------------------------------------

module.exports.updateOneuser = (Model) => asyncHandler(async (req, res) => {
  // const id = req.header('id')
  const token=req.header('token')
  const decode = jwt.verify(token,'anas')
  const id=decode.id
  // console.log(decode)
  // console.log(id)
  const doc = await Model.findById(id)

  if (doc) {
    await Model.findByIdAndUpdate(id, req.body, { new: true })
    res.json('done')

  }
  else {
    res.json(new ApiError('this user not found', 404))

  }

})


module.exports.updateOne = (Model) => asyncHandler(async (req, res) => {
  // const id = req.header('id')
  const { id }=req.query

 
  // console.log(decode)
  // console.log(id)
  const doc = await Model.findById(id)

  if (doc) {
    await Model.findByIdAndUpdate(id, req.body, { new: true })
    res.json('done')

  }
  else {
    res.json(new ApiError('this document not found', 404))

  }

})

// -------------------------------- add ---------------------------------------

module.exports.addOne = (Model) => asyncHandler(async (req, res, next) => {
  
  console.log(req.body);

  // if(!req.file){
  //   console.log("file is,t exist!")
  //   res.json("file isn,t exist!") 
  // }

  if (req.file) {
    await cloudinary.v2.uploader.upload(req.file.path, async (error, out) => {
      req.body.photo = out.secure_url;
    });
  }
  
  await Model.insertMany(req.body);

  res.json('document done');
});

// -------------------------------- get ---------------------------------------

module.exports.getALL = (Model) => asyncHandler(async (req, res) => {

  const api = new ApiFeatures(Model.find(), req.query).filter()
    .keyword()
    .paging()
    .sort()
    .fielding();

  const totalCount = await Model.countDocuments(api.query);

  const myProdect = await api.myQuery;

  res.json({
    totalCount,
    data: myProdect
  });
});


module.exports.getOneById = (Model) => asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  // const {iid}=req.body;
  console.log(id);
  // console.log(iid);
  const document = await Model.findById(id);
  
  if (!document) {
    return next(new ApiError(`No document found for id ${id}`, 404));
  }
  
  res.json(document);
});

// -------------------------------- delete ---------------------------------------

module.exports.deleteListbyId = (Model) => asyncHandler(async (req, res) => {
  const { list } = req.body;
  
  for (let i = 0; i < list.length; i++) {
    
    await Model.findByIdAndDelete(list[i]); 
  
  }
  res.json('done')
}
)

module.exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.query;
    const document = await Model.findByIdAndDelete(id);
    // console.log(id);
    // console.log(document);
    if (!document) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    else {
      res.json('deleted')

    }

  });
