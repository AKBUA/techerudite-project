const mongoose=require('mongoose')
const validator=require('node-mongoose-validator')

const Schema=mongoose.Schema
const adminSchema= new Schema({

    FirstName:{
        type:String,
        required:true,
    
        
    },
    LastName:{
        type:String,
        required:true,
        
    },

    email:{
        type:String,
        required:true,
        unique: true,
        validate: validator.$isEmail()
        
    },
    password:{
        type:String,
        required:true,
        
        minlength:5,
    }

})

module.exports=mongoose.model('admin',adminSchema)