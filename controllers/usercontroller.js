
const user=require('../db')


const getusername=async(req,res)=>{
    console.log("this controller")
    res.send({message:"get username"})


}


module.exports=getusername