const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello Express Server...")
})

const admin = (req,res)=>{
    res.send('This is admin dashboard')
}

const isAdmin = (req,res,next)=>{
    console.log("IsAdmin is running");
    next()
}

app.get('/signup',(req,res)=>{
    res.send('You are viewing SingUp page!')
})

app.get('/admin',isAdmin,admin)


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})