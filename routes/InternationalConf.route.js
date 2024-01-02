const { auth } = require('../middleware/auth')
const { addInternationalConf,  
gellAllInternationalConf, 
updateInternationalConf,
deleteInternationalConf,
deleteList,
getOneById,
} = require('../services/InternationalConf.services')

const Route=require('express').Router()

Route.post('/add', auth, addInternationalConf)  //test 
Route.delete('/delete', auth, deleteInternationalConf) //test
Route.put('/update', auth, updateInternationalConf) //test
Route.get('/getAll', gellAllInternationalConf) //test 
Route.put('/deleteList', auth, deleteList)  //test
Route.get('/getSingle', getOneById) //test 

module.exports=Route

