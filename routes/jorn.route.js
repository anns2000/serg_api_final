const { getAllJorn, addJorn, deleteJorn, updateJorn , deleteList} = require('../services/jorn.services')

const Route=require('express').Router()


Route.post('/add',addJorn)
Route.delete('/delete',deleteJorn)
Route.put('/update',updateJorn)
Route.get('/getAll',getAllJorn)
Route.put('/deleteList',deleteList)




module.exports=Route