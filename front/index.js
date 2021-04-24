const express= require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
const PORT=3000
const {mogoUrl}=require('./assets/Database/keys')


require('./assets/Model/User');
const requireToken = require('./assets/middleware/requireToken')
const authRoutes = require('./assets/routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)



mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
})

mongoose.connection.on('error',(err)=>{
    console.log('this is an error',err)
})

app.get('/', requireToken,(req,res)=>{
    res.send("your email is "+ req.user.email)
})

app.listen(PORT,()=>{
    console.log("server running " +PORT)
})