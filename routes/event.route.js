
const { addevent, deleteevent, updateevent, getAllevents, deleteList } = require('../services/event.services')
const Route=require('express').Router()


Route.post('/add',addevent)
Route.delete('/delete',deleteevent)
Route.put('/update',updateevent)
Route.get('/getAll',getAllevents)
Route.patch('/deleteList',deleteList)




module.exports=Route