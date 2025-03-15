const jwt = require('jsonwebtoken');

const postJwt = (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '7d'});


    res
    .cookie('token', token, {
        httpOnly : true,
        secure : process.env.NODE_ENV = 'production' ? true : false,
        sameSite : process.env.NODE_ENV = 'production' ? 'none' : 'strict'
    })
    .send({result : true})
}

const clearCookie = (req, res) => {
    res
    .clearCookie('token', {
        httpOnly : true,
        secure : process.env.NODE_ENV = 'production' ? true : false,
        sameSite : process.env.NODE_ENV = 'production' ? 'none' : 'strict',
        maxAge : 0
    })
    .send({result : true})
}

module.exports = {
    postJwt,
    clearCookie
}