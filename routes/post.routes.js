
import express from "express";

import{
    post
}from "../controller/post.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";
const postRouter= express.Router();

postRouter
.post("/post",authenticateUser,post)

export default postRouter;