const express = require("express");
const router = require("express").Router();

const {verifyToken,verifyUser,verifyAdmin }=require("../utillities/verifyToken")
const {updateUser,deleteUser,getAllUsers,getOneUser}=require("../controllers/users")

//UPDATE A User INFORMATION

router.put("/updateuser/:id",verifyUser, updateUser)

//DELETE A User INFORMATION FROM DATABASE

router.delete("/deleteuser/:id",verifyUser, deleteUser)

//  GET ALL User INFORMATION FROM DATABASE

router.get("/getallusers",verifyAdmin,getAllUsers)


// //  GET SPecific  User INFORMATION FROM DATABASE ON BASIS OF ID

router.get("/oneuser/:id",verifyUser, getOneUser)




module.exports = router;
