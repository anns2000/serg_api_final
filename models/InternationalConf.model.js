
const mongoose=require('mongoose')

const InternationalConfSchema=mongoose.Schema({

    des:String,
    link:String,

})

module.exports=mongoose.model('InternationalConf',InternationalConfSchema)
