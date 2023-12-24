const { auth } = require('../middleware/auth')
const { addbookChapters, updatebookChapters, deletebookChapters, getAll ,deleteList}
 = require('../services/bookChapters.services')
const { uploadSingleFile } = require('../utils/fileUpload')

const Route=require('express').Router()

Route.post('/add',addbookChapters)
Route.put('/update',updatebookChapters)
Route.delete('/delete',deletebookChapters)
Route.get('/getAll',getAll)
Route.put('/deleteList',deleteList)


module.exports=Route