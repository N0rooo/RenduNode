const Post = require('../models/post')
const fs = require('fs')
exports.createPost = (req,res,next)=>{
    console.log("post test")
    console.log(req.body)
    const postObject = req.body
    const p = new Post({
        titre:req.body.titre,
        text: req.body.text,
        autor: req.body.autor

    })
    p.save()
        .then(() => res.redirect('signup_success.html'))
        .catch(error => res.status(455).json({ error}))
}

exports.getPostId = (req,res,next)=>{
    console.log('get test id')
    Post.findOne({_id:req.params.id})
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}

exports.getAllPost = (req,res,next)=> {
    console.log('get all test')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}));
} 

exports.deletePost = (req,res,next)=>{
    console.log('delete test')
    Post.deleteOne({_id:req.params.id})
        .then(()=> res.status(200).json({message : 'ok'}))
        .catch(error => res.status(400).json({error}))
}
