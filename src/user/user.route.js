const {Router}=require('express')
const User=require('./user.module')
const app=Router()
const {signup,login} = require('../controller/signup')
app.get("/", (req, res) => {
    return res.send("success")
})

app.post("/signup",signup)
app.post("/login",login)



module.exports =app