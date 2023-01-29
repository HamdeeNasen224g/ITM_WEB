const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();
co 
router.get('/alluser',UserController.geralluser)
router.post('/adduser',UserController.addnewusers)
router.post('/deleteuser',UserController.deleteuser)
router.post('/edituser',UserController.updateuser)

module.exports = router