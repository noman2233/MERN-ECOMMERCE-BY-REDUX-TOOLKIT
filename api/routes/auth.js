

const express=require("express");
const router = express.Router();
const { body } = require('express-validator');
const { register ,login} = require("../controllers/auth");
const { verifyToken , verifyUser} = require("../utillities/verifyToken");

// REGISTRATION  ROUTE

router.post("/register",[
// username must be an email
body('username',"Username must contain at least 5 characters").isLength({ min: 5 }),
body('email',"Email is not valid").isEmail(),
// password must be at least 5 chars long
body('password',"password must contain at least 5 characters").isLength({ min: 5 }),
],register)



/// LOGIN ROUTE

router.post("/login",[

    body('email',"Email is not valid").isEmail(),
    body('password',"password must contain at least 5 characters"),
 ],login)
    
module.exports=router


