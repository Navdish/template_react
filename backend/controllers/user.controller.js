const CustomError = require('../lib/error');
const {userService} = require('../service');

exports.modifiedUser = async(req, res)=> {
    try {
        const user = await userService.updateUser({user_id : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}
