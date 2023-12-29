const { auth } = require('../middleware/auth')
const { addNational, deleteNational,getOneById, updateNational, gellAllNational ,deleteList}
 = require('../services/national.services')

const Route=require('express').Router()

Route.post('/add', addNational)  // ======>tested  // file upload problem ------
Route.delete('/delete', auth, deleteNational)  // ======>tested
Route.put('/update', auth, updateNational)  // ======>tested
Route.get('/getAll', gellAllNational) // ======>tested
Route.put('/deleteList', auth, deleteList) // ======>tested
Route.get('/getSingle', getOneById)   // ======>tested

module.exports=Route





