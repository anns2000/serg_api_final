const { addbook, deletebook, updatebook, gellAllbooks, deleteList } = require('../services/book.services')
const { uploadSingleFile } = require('../utils/fileUpload')
const Route=require('express').Router()

Route.post('/add', auth, addbook)
Route.delete('/delete', auth, deletebook)
Route.put('/update', auth, updatebook)
Route.get('/getAll', gellAllbooks)
Route.patch('/deleteList', auth, deleteList)

module.exports=Route