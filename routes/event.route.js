
const { auth } = require('../middleware/auth')
const { uploadSingleFile ,uploadSinglepdfFile,uploadFiles } = require('../utils/fileUpload');

const { addevent, deleteevent, updateevent, getAllevents, deleteList, getOneById } = require('../services/event.services')
const Route=require('express').Router()

Route.post('/add', auth, addevent) // ======>tested  
Route.delete('/delete', auth, deleteevent) // ======>tested
Route.put('/update', auth, updateevent) // ======>tested
Route.get('/getAll', getAllevents) // ======>tested
Route.patch('/deleteList', auth, deleteList) // ======>tested
Route.get('/getSingle', getOneById) // ======>tested

module.exports=Route