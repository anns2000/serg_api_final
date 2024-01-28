
const { string } = require('joi')
const mongoose=require('mongoose')

const memberSchema=mongoose.Schema({

    name:String,
    degree:String,
    affiliation: String,
    photo:String,
    type:String,
    email:String,
    researchInterest:String,
    description:String


})

module.exports=mongoose.model('member',memberSchema)
