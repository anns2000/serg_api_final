
const mongoose=require('mongoose')

const NationalSchema=mongoose.Schema({

    des:String,
    
})

module.exports=mongoose.model('national',NationalSchema)
