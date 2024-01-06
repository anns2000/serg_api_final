const { auth } = require('../middleware/auth')
const { addbookChapters, updatebookChapters, deletebookChapters, getAll ,deleteList, getOneById}
 = require('../services/bookChapters.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add', auth, addbookChapters)  // ======>tested  
Route.put('/update', auth, updatebookChapters)   // ======>tested
Route.delete('/delete', auth, deletebookChapters)  // ======>tested
Route.get('/getAll', getAll)  // ======>tested
Route.put('/deleteList', auth, deleteList) // ======>tested
Route.get('/getSingle', getOneById)  // ======>tested

module.exports=Route