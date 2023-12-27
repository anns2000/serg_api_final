const express = require('express')
const multer = require('multer');

const app = express()
const port =process.env.port|| 5503
app.use(express.json())
app.use(express.urlencoded(extended = true));


const mongoose = require('mongoose');
const { GlobelError } = require('./middleware/Globel.error.handler');
const ApiError = require('./utils/api.error');
require('express-async-errors');
//anas here here
const connectString ="mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/SRGE"
mongoose.set('strictQuery', false);
mongoose.connect(connectString)
  .then(() => console.log('Connected!'));

var cors = require('cors');
const { uploadSingleFile } = require('./utils/fileUpload');

app.use(cors());

  app.use('/bookChapters',uploadSingleFile(),require('./routes/bookChapters.route'))
  app.use('/user',uploadSingleFile(),require('./routes/user.route'))
  app.use('/jorn',uploadSingleFile(),require('./routes/jorn.route'))
  app.use('/InternationalConf',uploadSingleFile(),require('./routes/InternationalConf.route'))
  app.use('/book',uploadSingleFile(),require('./routes/book.route'))
  app.use('/national',uploadSingleFile(),require('./routes/national.route'))
  app.use('/member',uploadSingleFile(),require('./routes/member.route'))
  app.use('/event',uploadSingleFile(),require('./routes/event.route'))

  app.use(GlobelError);


  app.all('*',(req,res,next)=>{
    
    next( new ApiError("can't find this path",404));
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
process.on('unhandledRejection',(err)=>{
  console.error('unhandledRejection '+err)
  process.exit(1);
})