const { auth } = require('../middleware/auth')
const { addInternationalConf,  
gellAllInternationalConf, InternationalConfProdects, 
updateInternationalConf,
deleteInternationalConf,
deleteList,
} = require('../services/InternationalConf.services')

const Route=require('express').Router()

Route.post('/add', auth, addInternationalConf)
Route.delete('/delete', auth, deleteInternationalConf)
Route.put('/update', auth, updateInternationalConf)
Route.get('/getAll', gellAllInternationalConf)
Route.put('/deleteList', auth, deleteList)

module.exports=Route

