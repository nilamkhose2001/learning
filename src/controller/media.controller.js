const Media = require("../media/media.model");

const create = async (req, res) => {
    console.log("create")
  const { name, desc,price } = req.body;
  console.log(name, desc);
  console.log(req.files)
  console.log("**************")
  //console.log(req.files.videos)
  let vedios = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let v of req.files.videos) {
      console.log(v)
       vedios.push("\\" + v.path);
    }
  }

  try{
    const createMedia=await Media.create({
        name,vedios,desc,price
    })
    res.send({message:"Media uploaded successfully...!"})
  }
  catch(err){
    {
        res.send({message:err.message})
    }
  }
};

const getAll = async (req, res) => {
  try {
    const media = await Media.find();

    res.send({data: media,message:"Data fetched successfully"});
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { create ,getAll};
