const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();

// router.get('/',(req, res, next) => {res.send("Home");});
router.get('/', (req, res,next) => {
    res.render('/views/index.ejs')
  })