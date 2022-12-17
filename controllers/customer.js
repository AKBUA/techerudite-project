const customerSchema=require('../models/customer');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');




//customer registration page

exports.customerRegistration=async (req,res)=>{
    const {FirstName,LastName,email,password}=req.body
    if(!email){
        res.send('Email is required')
    }
    const salt = await bcrypt.genSalt(10)
    const bcryptedPassword=await bcrypt.hash(password,salt) 
    const user=new  customerSchema(
      {
        FirstName:FirstName,
        LastName:LastName,
        email:email,
        password:bcryptedPassword,
        
      }

    ) 
    user.save().then((data)=>{
        res.status(200).send({
            message:"You are registered",
            data:data})
    }).catch((e)=>{
        console.log(e)
        res.send({e})
    })
    

}