
const cookie = require('cookie-parser')
const express = require("express");


const User = require("../models/users");
const { validationResult } = require('express-validator');
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = async (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { password, email } = User
  try {
    let user = await User.findOne({ email: email })

    if (user) {
      return res.status(409).send("Email already exists")
    }

    let salt = await bcryptjs.genSalt(10)
    let hashedPassword = await bcryptjs.hashSync(req.body.password, salt)

    newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      // password:req.body.password
      password: hashedPassword,
    })
    res.status(200).json({ status: "User is created", newUser })

  } catch (error) {
    res.status(500).json({ status: "server error", message: error.message })
  }



}


const login = async (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { password, email } = req.body

  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    let comparePassword = await bcryptjs.compare(password, user.password)
    if (!comparePassword) {
      return res.status(400).json("Incorrect Login credentials")
    }

    let data = {
      user: {
        id: user.id
      }
    }
    let token = await jwt.sign({ data, isAdmin: user.isAdmin }, process.env.SECRET_KEY)
  
    res.cookie("access_token", token, {
      expires: new Date(Date.now() + 2589000),
      httpOnly: true
  });
  res.status(201).json({user,token});
  } catch (error) {
    res.status(500).json({ status: "server error", message: error.message })
  }
}


module.exports = { register, login }