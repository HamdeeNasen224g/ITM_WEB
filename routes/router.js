const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();
              
router.get('/alluser',UserController.geralluser)
router.post('/adduser',UserController.addnewusers)
router.post('/deleteuser',UserController.deleteuser)

module.exports = router