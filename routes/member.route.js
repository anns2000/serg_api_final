const { auth } = require('../middleware/auth')
const { addMember, deleteMember, getOneById,updateMember, getAllMembers, addTest, deleteList,  } = require('../services/member.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add', auth, uploadSingleFile(), addMember) //tested
Route.delete('/delete', auth, deleteMember) //tested
Route.put('/update', auth, updateMember) //tested
Route.get('/getAll', getAllMembers) //tested
Route.put('/deleteList', auth, deleteList)  //tested
Route.get('/getSingle', getOneById) //tested

module.exports=Route



