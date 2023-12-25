const { auth } = require('../middleware/auth')
const { addMember, deleteMember, updateMember, getAllMembers, addTest, deleteList,  } = require('../services/member.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add', auth, uploadSingleFile(), addMember)
Route.post('/addPhoto', auth, uploadSingleFile(), addTest)

Route.delete('/delete', auth, deleteMember)
Route.put('/update', auth, updateMember)
Route.get('/getAll', getAllMembers)
Route.put('/deleteList', auth, deleteList)

module.exports=Route



