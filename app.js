const express = require('express')
const app = express()
const port =process.env.port|| 5503
app.use(express.json())
const mongoose = require('mongoose');
const { GlobelError } = require('./middleware/Globel.error.handler');
const ApiError = require('./utils/api.error');
require('express-async-errors');
//anas here here

const connectString ="mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/SRGE"
mongoose.set('strictQuery', false);
mongoose.connect(connectString)
  .then(() => console.log('Connected!'));

const multer  = require('multer')
var cors = require('cors');
const membersModel = require('./models/members.model');

app.use(cors());

  app.use('/bookChapters',require('./routes/bookChapters.route'))
  app.use('/user',require('./routes/user.route'))
  app.use('/jorn',require('./routes/jorn.route'))
  app.use('/InternationalConf',require('./routes/InternationalConf.route'))
  app.use('/book',require('./routes/book.route'))
  app.use('/national',require('./routes/national.route'))
  app.use('/member',require('./routes/member.route'))

  
  app.all('*',(req,res,next)=>{
    
    next( new ApiError("can't find this path",404));
  })
  
app.use(GlobelError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
process.on('unhandledRejection',(err)=>{
  console.error('unhandledRejection '+err)
  process.exit(1);
})