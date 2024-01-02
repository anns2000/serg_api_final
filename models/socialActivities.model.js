
const mongoose=require('mongoose')

const socialActivitiesSchema=mongoose.Schema({
    photo:String,
    des:String,
    link:String,
})

module.exports=mongoose.model('socialActivities',socialActivitiesSchema)
