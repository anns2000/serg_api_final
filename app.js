const express = require('express')
const multer = require('multer');
require('dotenv').config();

// const port = process.env.PORT || 3000;
// const databaseUrl = process.env.DATABASE_URL || "mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/SRGE";


const app = express()
const port =process.env.PORT  || 5503
app.use(express.json())
// app.use(express.urlencoded(extended = true));
app.use(express.urlencoded({ extended: true }));



const mongoose = require('mongoose');
const { GlobelError } = require('./middleware/Globel.error.handler');
const ApiError = require('./utils/api.error');
require('express-async-errors');
//anas here here
const connectString ="mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/SRGE"
// mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/?retryWrites=true&w=majority
mongoose.set('strictQuery', false);
mongoose.connect(connectString)
  .then(() => console.log('Connected!'));

var cors = require('cors');
const { uploadSingleFile ,uploadSinglepdfFile,uploadFiles } = require('./utils/fileUpload');

app.use(cors());

  app.use('/bookChapters',uploadSingleFile(),require('./routes/bookChapters.route'))  //tested
  app.use('/user',uploadSingleFile(),require('./routes/user.route')) //tested
  app.use('/jorn',uploadSingleFile(),require('./routes/jorn.route')) //tested
  app.use('/InternationalConf',uploadSingleFile(),require('./routes/InternationalConf.route')) //test
  app.use('/book',uploadSingleFile(),require('./routes/book.route')) //tested
  app.use('/news',uploadSingleFile(),require('./routes/news.route')) //tested
  app.use('/socialActivities',uploadSingleFile(),require('./routes/socialActivities.route')) //tested
  app.use('/national',uploadSingleFile(),require('./routes/national.route'))  //tested
  app.use('/member',uploadSingleFile(),require('./routes/member.route')) //tested
  app.use('/event',uploadSingleFile(),require('./routes/event.route'))   //tested

  app.use(GlobelError);


  app.all('*', (req, res, next) => {
    const error = new ApiError("can't find this path", 404);
    console.log('Requested URL:', req.url);
    console.error(error);
    next(error);
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
process.on('unhandledRejection',(err)=>{
  console.error('unhandledRejection '+err)
  process.exit(1);
})

