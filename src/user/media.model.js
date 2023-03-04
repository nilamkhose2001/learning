const mongoose = require('mongoose')
const MediaSchema=new mongoose.Schema({
    name:{type:"string",required:"true"},
    vedio:{type:"string"}

},{
    timestamps:true
})

let Media=mongoose.model("media",MediaSchema)