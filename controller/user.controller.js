import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

 export const registerUser= async (req,res)=> {
  try{
    const priviousUser= await userModel.findOne({email:req.body.email});
    if(priviousUser) {
        const err= new Error ("user email already exist")
        err.statusCode = 400
        throw err
    }

    const currentPassword = req.body.password;
    const hashedPassword= bcrypt.hashSync(currentPassword,10);
    const saveUser= await userModel.create({
        ...req.body,
        password: hashedPassword,
    });
    res.json(saveUser);
    
  }catch(err){
    res.status(err?.statusCode || 500).json({msg:err?.message|| "something went wrong"})
  };
};

export const loginUser = async (req, res)=> {
    try{
        const finduser= await userModel.findOne({email:req.body.email}).select("+password");
        
        if (!finduser){ 
            const err= new Error("user doesnot exist")
            err.statusCode= 400
            throw err
        }

        const currentPassword= finduser.password;
        const comparePassword= bcrypt.compareSync(req.body.password,currentPassword)
        if(!comparePassword){
            const err= new Error('invalid password')
            err.statusCode= 400
            throw err
        }
        
        const token= jwt.sign({_id: finduser._id},config.jwt_secret,{
            issuer:config.jwt_issuer,
            expiresIn:config.jwt_expiry_date,
        })
        return res.json({msg:"loged in successfully",accessToken:token});

    }catch(err){
        res.status(err?.statusCode || 500).json({msg:err?.message || "something went wrong"})
    };
};

export const userList= async(req, res)=> {
    const getuser= await userModel.find();
    res.json(getuser);
};