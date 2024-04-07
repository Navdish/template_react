const CustomError = require('../lib/error');
const {postService} = require('../service');
const jwt = require("jsonwebtoken");


exports.addPost = async(req, res)=> {
    try {
        const response = await postService.addPost({userId : req?.user?.id, files: req?.files, data: req?.body});
        if(!response) throw new CustomError("Post not added", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetchPost = async(req, res)=> {
    try {
        const response = await postService.fetchPost({query : req?.query});
        if(!response) throw new CustomError("Posts not fetched", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.updatePost = async(req, res)=> {
    try {
        const response = await postService.updatePost({tokenUserId : req?.user?.id, body : req?.body, params : req?.params});
        res.status(200).json(response);
    }
    catch (error) {
        res.status(error?.code).json({message : error?.message});
    }   
}

exports.removePost = async(req, res)=> {
    try {
        const response = await postService.deletePost({userId : req?.user?.id, params : req?.params});
        res.status(200).json(response);
    }
    catch (error) {
        res.status(error?.code).json({message : error?.message});
    }
}
