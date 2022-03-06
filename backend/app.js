const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./models/post')
const port = 3000
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const path = require('path')
const cors = require('cors')
mongoose.connect('mongodb+srv://nicoalz:ywQjqtXcXCeKCupZ@cluster0.eserh.mongodb.net/Cluster0?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("db valid"))
.catch(()=> console.log("db error"))


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended :true
}))

app.use('/post',postRoutes)
app.use('/user',userRoutes)

module.exports = app