const { auth } = require('../middleware/auth')
const { getAllJorn, addJorn,getOneById, deleteJorn, updateJorn , deleteList} = require('../services/jorn.services')

const Route=require('express').Router()

Route.post('/add', auth, addJorn)
Route.delete('/delete', auth, deleteJorn)
Route.put('/update', auth, updateJorn)
Route.get('/getAll', getAllJorn)
Route.put('/deleteList', auth, deleteList)
Route.get('/getSingle', getOneById)

module.exports=Route


