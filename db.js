

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>console.log("Connected to database"))
.catch(err=>console.log(err))


const userSchema=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
           type:String 
    }
})

const user=mongoose.model('user',userSchema)

module.exports={user}