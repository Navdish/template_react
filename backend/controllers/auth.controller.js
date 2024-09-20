const { httpStatusCode } = require('../libs/constants');
const {authService} = require('../service');

exports.createUser = async (req, res)=>{
    try {
      const user = await authService.create({data : req?.body})
      res.status(201).json({message : "user added successfully"})
      return handleSuccess(res,user,httpStatusCode.CREATED)
    }
    catch (error) {
      return handleError(res,error)
    }
}

exports.loginUser = async (req, res)=>{
    try {
      const user = await authService.login({data : req?.body});
      res.status(200).json({user, message: "user loggedin successfully"});
    }
    catch(error) {
      return handleError(res,error)
    }
}