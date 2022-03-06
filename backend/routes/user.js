const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')

console.log("user route")
router.post('/signup',userController.signup)
router.post('/login',userController.login)

module.exports = router