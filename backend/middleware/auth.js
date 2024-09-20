const jwt = require("jsonwebtoken")

function authenticateUser(req, res, next) {
    const token = req.headers['token'];
    if(token === null) return res.status(401);
    jwt.verify(token, 'Zenmonk', (err, user)=> {
        if(err) return res.status(498).json({message : 'No longer valid'});
        req.user = user;
        next();
    })
}

module.exports = {
    authenticateUser
};

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { handleError } = require("../libs/error");
const { employeeRepositoryObj } = require("../repositories/employee.repository");
const authenticateJWT = async (req, res, next) => {
  try {
    if (!req?.headers?.authorization) {
      return res.status(401).json({ messgae: "Unauthorized", status: 401 });
    }
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    let userData = jwt.verify(token, process.env.JWT_SECRET);
    if (userData) {
      if (userData?.employee_id) {
        const employee_id = userData?.employee_id;
        userData = await employeeRepositoryObj.getSpecificEmployee({
          employee_id,
        });
      }else {
        return res.status(401).json({ messgae: "Unauthorized", status: 401 });
      }
      req.userData = userData;
      next();
    } else {
      return res.status(401).json({ messgae: "Invalid User", status: 401 });
    }
  } catch (error) {
    console.log("error: ", error);
    return handleError(res, error);
  }
};

module.exports = authenticateJWT;
