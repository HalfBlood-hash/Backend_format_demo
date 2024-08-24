
const {user}=require('../db')


const getusername=async(req,res)=>{
    res.send({message:"get username "})


}


module.exports={getusername}