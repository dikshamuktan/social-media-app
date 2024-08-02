import express from "express";

import{
    registerUser,
    loginUser,
    userList,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter
.post("/register",registerUser)
.post("/login",loginUser)
.get("/list", userList)

export default userRouter;