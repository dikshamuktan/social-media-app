import postModel from "../model/post.model.js";
// import multer from "multer";


export const post= async(req, res)=> {
  try{
   const post= await postModel.create({ ...req.body,user:req.user._id });
   res.json(post);
  }catch(err){
    res.status(err?.statusCode || 500).json({msg:err?.message|| "something went wrong"})
};
};



