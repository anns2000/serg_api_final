const { auth } = require('../middleware/auth')
const { addInternationalConf,  
gellAllInternationalConf, InternationalConfProdects, 
updateInternationalConf,
deleteInternationalConf,
} = require('../services/InternationalConf.services')

const Route=require('express').Router()

Route.post('/add',addInternationalConf)
Route.delete('/delete',deleteInternationalConf)
Route.put('/update',updateInternationalConf)
Route.get('/getAll',gellAllInternationalConf)




module.exports=Route