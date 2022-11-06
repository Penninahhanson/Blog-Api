const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    title:  {
        type: String,
        required: true,
    },
    author:  { 
        type: String,
        required: true,
        unique: true
    },
    description:  {
        type: String,
        required: true
    },
    body:  {
        type: String,
        required: true
    },
    createAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateAt : {
        type: Date,
        default: Date.now
    },
})

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost