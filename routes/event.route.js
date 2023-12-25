
const { addevent, deleteevent, updateevent, getAllevents, deleteList } = require('../services/event.services')
const Route=require('express').Router()

Route.post('/add', auth, addevent)
Route.delete('/delete', auth, deleteevent)
Route.put('/update', auth, updateevent)
Route.get('/getAll', getAllevents)
Route.patch('/deleteList', auth, deleteList)

module.exports=Route