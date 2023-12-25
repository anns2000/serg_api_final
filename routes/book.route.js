const { auth } = require('../middleware/auth')
const { addbook, deletebook, updatebook, gellAllbooks, deleteList, getOneById } = require('../services/book.services')
const Route=require('express').Router()

Route.post('/add', auth, addbook)
Route.delete('/delete', auth, deletebook)
Route.put('/update', auth, updatebook)
Route.get('/getAll', gellAllbooks)
Route.get('/getSingle', getOneById)
Route.patch('/deleteList', auth, deleteList)

module.exports=Route