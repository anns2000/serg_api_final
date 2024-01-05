const { auth } = require('../middleware/auth')
const { addnews, deletenews, updatenews, gellAllnews, deleteList, getOneById } = require('../services/news.services')
const { uploadSingleFile } = require('../utils/fileUpload')
const Route=require('express').Router()

Route.post('/add', auth,addnews) // ======>tested  // file upload problem ------
Route.delete('/delete', auth, deletenews) // ======>tested
Route.put('/update', auth, updatenews)  // ======>tested
Route.get('/getAll', gellAllnews)     // ======>tested
Route.get('/getSingle', getOneById)    // ======>tested
Route.patch('/deleteList', auth, deleteList) // ======>tested

module.exports=Route