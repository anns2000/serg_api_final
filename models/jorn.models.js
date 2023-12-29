
const mongoose=require('mongoose')

const jornSchema=mongoose.Schema({

    year:String,
    publications:[{
        description:String,
        link:String,
    }]
})

module.exports=mongoose.model('jorn',jornSchema)
