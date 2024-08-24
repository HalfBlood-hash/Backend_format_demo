

// create express app
const exp=require('express')
const app=exp()

const path=require('path')


app.use(exp.json())

const userApp = require('./api/user-api')
app.use('/user-api',userApp)


app.use((err,req,res,next)=>{
    res.send({message:'message from error handler',payload:err.message})
})




// maken the express app listen to port number 4000
app.listen(4000,()=>console.log("listening on the port 4000"))







