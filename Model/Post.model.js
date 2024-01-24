const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    
},{
    versionKey: false
});


const postModel = mongoose.model("posts", postSchema);


module.exports = {
    postModel
}