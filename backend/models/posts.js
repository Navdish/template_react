const mongoose = require('mongoose');
const Users = require('./users');

const Post = mongoose.Schema({
    userId : {
        type : String,
        ref : Users,
        require: true
    },
    title : String,
    body : String,
    photos : [String]
}, {timestamps: true} )

const Posts =  mongoose.model('PostModel', Post);
module.exports = Posts;