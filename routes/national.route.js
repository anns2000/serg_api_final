const { auth } = require('../middleware/auth')
const { addNational, deleteNational, updateNational, gellAllNational ,deleteList}
 = require('../services/national.services')

const Route=require('express').Router()

Route.post('/add', addNational)
Route.delete('/delete', auth, deleteNational)
Route.put('/update', auth, updateNational)
Route.get('/getAll', gellAllNational)
Route.put('/deleteList', auth, deleteList)

module.exports=Route





module.exports=Route