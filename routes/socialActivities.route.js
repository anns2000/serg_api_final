const { auth } = require('../middleware/auth')
const { addActivities, deleteActivities, updateActivities, gellAllActivitiess, deleteList, getOneById } = require('../services/socialActivities.services')
const { uploadSingleFile } = require('../utils/fileUpload')
const Route=require('express').Router()


Route.post('/add', auth,addActivities) // ======>tested  // file upload problem ------
Route.delete('/delete', auth, deleteActivities) // ======>tested
Route.put('/update', auth, updateActivities)  // ======>tested
Route.get('/getAll', gellAllActivitiess)     // ======>tested
Route.get('/getSingle', getOneById)    // ======>tested
Route.patch('/deleteList', auth, deleteList) // ======>tested

module.exports=Route