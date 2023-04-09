
const mongoose=require('mongoose')

const  bookChaptersSchema=mongoose.Schema({

    name:String,
    allChapters: [{
         des:String,
        getChapter:String
    }],
    photo:String,

})

module.exports=mongoose.model('bookChapter', bookChaptersSchema)
