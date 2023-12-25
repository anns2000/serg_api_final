
const { auth } = require('../middleware/auth')
const { addevent, deleteevent, updateevent, getAllevents, deleteList, getOneById } = require('../services/event.services')
const Route=require('express').Router()

Route.post('/add', auth, addevent)
Route.delete('/delete', auth, deleteevent)
Route.put('/update', auth, updateevent)
Route.get('/getAll', getAllevents)
Route.patch('/deleteList', auth, deleteList)
Route.get('/getSingle', getOneById)

module.exports=Route