import mongoose from "mongoose";

const likeSchema= mongoose.Schema(
    {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"

    },
    });

    const likeModel= mongoose.model("like",likeSchema);
    export default likeModel;