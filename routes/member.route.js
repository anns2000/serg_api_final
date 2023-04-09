const { addMember, deleteMember, updateMember, getAllMembers, addTest,  } = require('../services/member.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add',uploadSingleFile(),addMember,)
Route.post('/test',addTest)

Route.delete('/delete',deleteMember)
Route.put('/update',updateMember)
Route.get('/getAll',getAllMembers)




module.exports=Route