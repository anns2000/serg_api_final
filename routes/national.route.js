const { deleteList } = require('../services/bookChapters.services')
const { addNational, deleteNational, updateNational, gellAllNational }
 = require('../services/national.services')

const Route=require('express').Router()


Route.post('/add',addNational)
Route.delete('/delete',deleteNational)
Route.put('/update',updateNational)
Route.get('/getAll',gellAllNational)
Route.patch('/deleteList',deleteList)



module.exports=Route