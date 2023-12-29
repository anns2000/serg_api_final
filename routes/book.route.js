const { auth } = require('../middleware/auth')
const { addbook, deletebook, updatebook, gellAllbooks, deleteList, getOneById } = require('../services/book.services')
const { uploadSingleFile } = require('../utils/fileUpload')
const Route=require('express').Router()
Route.post('/add', auth,addbook) // ======>tested  // file upload problem ------
Route.delete('/delete', auth, deletebook) // ======>tested
Route.put('/update', auth, updatebook)  // ======>tested
Route.get('/getAll', gellAllbooks)     // ======>tested
Route.get('/getSingle', getOneById)    // ======>tested
Route.patch('/deleteList', auth, deleteList) // ======>tested

module.exports=Route