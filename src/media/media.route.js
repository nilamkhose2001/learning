const multer=require('multer')
const {Router} = require('express')
const fs=require('fs')
const path=require('path')
const app=Router()
const {create,getAll}=require("../controller/media.controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync("public")) {
        fs.mkdirSync("public");
      }
  
      if (!fs.existsSync("public/videos")) {
        fs.mkdirSync("public/videos");
      }
  
      cb(null, "public/videos");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      var ext = path.extname(file.originalname);
  
      if (ext !== ".mkv" && ext !== ".mp4") {
        return cb(new Error("Only videos are allowed!"));
      }
  
      cb(null, true);
    },
  });
  
  
  //get all media
  app.get("/", getAll);
  
  //post create new media
  app.post(
    "/",
    upload.fields([
      {
        name: "videos",
        maxCount: 5,
      },
    ]),
    create
  );
  

module.exports =app