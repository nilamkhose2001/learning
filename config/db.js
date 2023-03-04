require("dotenv").config()
const mongoose=require("mongoose")

const connect=()=>{
    let con=  mongoose.connect(process.env.MONGODB_URL,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        })

        mongoose.connection.on("connected",()=>{
            console.log("database connected")
        })

        mongoose.connection.on("error",(err)=>{
            console.log("connection error",err)
        })
        return con
}


module.exports=connect