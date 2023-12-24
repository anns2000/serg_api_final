//const { auth } = require('../middleware/auth')
const { addbook, deletebook, updatebook, gellAllbooks, deleteList } = require('../services/book.services')
//const { uploadSingleFile } = require('../utils/fileUpload')
const Route=require('express').Router()


Route.post('/add',addbook)
Route.delete('/delete',deletebook)
Route.put('/update',updatebook)
Route.get('/getAll',gellAllbooks)
Route.patch('/deleteList',deleteList)




module.exports=Route