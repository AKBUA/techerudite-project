const adminSchema=require('../models/admin');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

//admin registraion page
exports.adminRegistration=async (req,res)=>{
    const {FirstName,LastName,email,password}=req.body
    if(!email){
        res.send('Email is required')
    }
    const salt = await bcrypt.genSalt(10)
    const bcryptedPassword=await bcrypt.hash(password,salt) 
    const user=new  adminSchema(
      {
        FirstName:FirstName,
        LastName:LastName,
        email:email,
        password:bcryptedPassword,
        
      }

    ) 
    user.save().then((data)=>{
        res.status(200).send({
            message:"You are registered as Admin",
            
            data:data})
    }).catch((e)=>{
        console.log(e)
        res.send({e})
    })
    

}


//admin login page
exports.adminlogin=async (req,res)=>{
    const {email,password}=req.body
    if(!email && !password){
        res.status(500).send({message:'Email  or password missing '})
    }
    const adminID= await adminSchema.findOne({email})
    if(!adminID){
        res.status(500).send({
            message:"You are not allowed to login from here"
        })
    } 
    if(adminID.email && await  bcrypt.compare(password ,adminID.password)){


     res.status(200).send({
        message:' Admin is logged in',
    adminId:adminID._id,
        
     })
    }
    else{
        res.send('email or password mismatched')
         }       

}