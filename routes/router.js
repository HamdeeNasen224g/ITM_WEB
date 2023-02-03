const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();
const {check} = require("express-validator");
router.get('/head', (req, res,next) => {
  res.sendFile('layout/head.ejs');
})
router.get('/', (req, res,next) => {
    res.render('index');
  })
  router.get('/users', (req, res,next) => {
    res.render('users');
  })  

router.get('/alluser',UserController.getalluser)
router.post('/adduser',UserController.addnewusers)
router.post('/deleteuser',[check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only number")],UserController.deleteuser)
router.post('/edituser',UserController.updateuser)

module.exports = router