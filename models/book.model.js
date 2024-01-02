
const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    name:String,
    photo:String,
    des:String,
    link:String,
})

module.exports=mongoose.model('book',bookSchema)
