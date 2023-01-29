const express = require('express');
const UserController = require("../controllers/UsersController")
const router = require('express').Router();
const {check} = require("express-validator");

router.get('/alluser',UserController.geralluser)
router.post('/adduser',UserController.addnewusers)
router.post('/deleteuser',[check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only number")],UserController.deleteuser)
router.post('/edituser',UserController.updateuser)

module.exports = router