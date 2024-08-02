import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        status:{
            type:String,
            enum:["private","public"],
            default:"public",
        },
        caption:{
            type:String,
            require:true
        },
        image:{
            type:String,
            require:false
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            require:true
        },
        likeCount:{
            type:Number,
            default:0,
            require:false
        },
        
    },
    {timestampes:true}
);

    const postModel= mongoose.model("post",postSchema);
    export default postModel;