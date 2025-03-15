const User = require('../models/user');

const verifyStudent = async (req, res, next) => {
    const user = req.user;
    const query = {email : user?.email};
    const result = await User.findOne(query);
    if(!result || result?.role !== "Student"){
        return res.status(401).send({ message: 'unauthorized access!!' })
    }
    next();
}

module.exports = verifyStudent