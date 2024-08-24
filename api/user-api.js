
const exp =require('express')
const userApp=exp.Router()

const getusername=require('../controllers/usercontroller')
const  expressErrorHandler=require('express-async-handler')



userApp.get('/getuser',expressErrorHandler(getusername))


module.exports=userApp