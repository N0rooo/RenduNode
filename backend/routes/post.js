const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const postController = require('./../controllers/postController')

console.log("post route")
router.post('/',auth,postController.createPost)
router.get('/:id',auth,postController.getPostId)
router.get('/',auth,postController.getAllPost)
router.delete('/:id',auth,postController.deletePost)


module.exports = router