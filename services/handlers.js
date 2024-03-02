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
    console.log(doc)
    if(!req.file){
      console.log("file is,t exist!")
      res.json("file isn,t exist!") 
    }
  
    if (req.file) {
      console.log(req.body);
      console.log(req.file);
      await cloudinary.v2.uploader.destroy(doc.photo, function(error,result) {
        console.log(result, error) }) 
      await cloudinary.v2.uploader.upload(req.file.path, async (error, out) => {
        req.body.photo = out.secure_url;
      });
    }

    await Model.findByIdAndUpdate(id, req.body, { new: true })
    res.json('done')

  }
  else {
    res.json(new ApiError('this document not found', 404))

  }

})

// -------------------------------- add ---------------------------------------

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the directory where you want to store the files
        cb(null, 'D:/node projects/serg_api_final/upload/pdf');
    },
    filename: function (req, file, cb) {
        // Use the original filename for the uploaded file
        cb(null, file.originalname);
    }
});

// Create the multer middleware with the specified storage
const upload = multer({ storage: storage });

module.exports.addOne = (Model) => asyncHandler(async (req, res, next) => {
    if (!req.file) {
        console.log("File doesn't exist!");
        // Handle the case when file is missing
        return res.status(400).json({ error: "File doesn't exist!" });
    }

    if (req.file && req.file.fieldname == 'pdf') {
        console.log(req.body);
        upload.single("pdf")
    }else if (req.file && req.file.fieldname == 'photo'){
      console.log(req.body);
      await cloudinary.v2.uploader.upload(req.file.path, async (error, out) => {
        req.body.photo = out.secure_url;
      });
    }

  await Model.insertMany(req.body); 
  res.json('document done');
});

// module.exports.addOneMemper = (Model) => asyncHandler(async (req, res, next) => {
//   console.log(req.body)
//   console.log(req.file)
//   try {
//       const { name, degree, affiliation, type } = req.body;

//       // Upload image to Cloudinary
//       // const result = await cloudinary.uploader.upload(req.file, { folder: 'users_test' });

//       const result = await cloudinary.v2.uploader.upload(req.file.path,
//       { public_id: req.file.filename});
//       const member = new membersModel()

//       await Model.insertMany(req.body);

//       res.json('Document added successfully');
//   } catch (error) {
//       console.error(error);
//       res.status(500).json('Internal Server Error');
//   }
  
//   module.exports.uploadSingleFile = upload.single('photo');
// });
    
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
