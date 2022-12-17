const express = require('express');
const router=express.Router();
const adminController=require('../controllers/admin');

router.post('/register/admin',adminController.adminRegistration)
router.post('/login/admin',adminController.adminlogin)
module.exports=router;