
const mongoose=require('mongoose')

const memberSchema=mongoose.Schema({

    name:String,
    degree:String,
    affiliation: String,
    photo:String,


})

module.exports=mongoose.model('member',memberSchema)
