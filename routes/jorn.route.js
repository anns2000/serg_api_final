const { auth } = require('../middleware/auth')
const { getAllJorn, addJorn,getOneById, deleteJorn, updateJorn , deleteList} = require('../services/jorn.services')

const Route=require('express').Router()

Route.post('/add', auth, addJorn) //tested
Route.delete('/delete', auth, deleteJorn)
Route.put('/update', auth, updateJorn) //tested
Route.get('/getAll', getAllJorn) //tested
Route.put('/deleteList', auth, deleteList) //teted
Route.get('/getSingle', getOneById) //tested

module.exports=Route


