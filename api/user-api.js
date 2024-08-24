
const exp =require('express')
const userApp=exp.Router()

const{getAllUser}=require('../controllers/usercontroller')
const  expressErrorHandler=require('express-async-handler')



userApp.get('/getuser',expressErrorHandler(getAllUser))


module.exports=userApp