const { auth } = require('../middleware/auth')
const { addbookChapters, updatebookChapters, deletebookChapters, getAll ,deleteList, getOneById}
 = require('../services/bookChapters.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add', auth, addbookChapters)
Route.put('/update', auth, updatebookChapters)
Route.delete('/delete', auth, deletebookChapters)
Route.get('/getAll', getAll)
Route.put('/deleteList', auth, deleteList)
Route.get('/getSingle', getOneById)

module.exports=Route