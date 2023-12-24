const { addMember, deleteMember, updateMember, getAllMembers, addTest, deleteList,  } = require('../services/member.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add',uploadSingleFile(),addMember,)
Route.post('/addPhoto',uploadSingleFile(),addTest)

Route.delete('/delete',deleteMember)
Route.put('/update',updateMember)
Route.get('/getAll',getAllMembers)
Route.put('/deleteList',deleteList)



module.exports=Route