require ("dotenv").config()
const express = require("express")
const cors=require("cors")
const connect = require("./config/db")
const User = require("./src/user/user.module")
const app=express()
const PORT=process.env.PORT
const userRouter=require("./src/user/user.route")

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

app.get("/",async(req,res)=>{
    // res.send("Hiii")
  // await connect()
    // let x= await User.create({name:"aman", level:"hard",score:1}) 
    // console.log(x)
})




app.listen(PORT,async()=>{
    await connect()
    console.log(`listening on http://localhost:${PORT}`)
})