const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();
              
router.get('/alluser',UserController.geralluser)
router.post('/adduser',UserController.addnewusers)
router.post('/deleteuser',UserController.deleteuser)
router.patch('/edituser',UserController.updateuser)

module.exports = router