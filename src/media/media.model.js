const mongoose = require('mongoose')
const MediaSchema=new mongoose.Schema({
    name:{type:String,required:true},
    vedios: [{ type: String }],
    desc:{type:String,required:true}

},{
    timestamps:true
})

let Media=mongoose.model("media",MediaSchema)
module.exports = Media