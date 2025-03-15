const User = require('../models/user');

const postUser = async(req, res) => {
    try {
        const email = req.body.email;
        const userData = new User(req.body);
        const isExist = await User.findOne({email : email});

        if(isExist){
            return res.status(401).send({message : "User already saved in Database"});
        }

        const result = await userData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from post user ${error}`);
        res.status(500).send(`An error from post user ${error}`);
    }
}


const getAllUser = async(req, res) => {
    try {
        const result = await User.find();
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get all user ${error}`);
        res.status(500).send(`An error from get all user ${error}`);
    }
}

const getUserByEmail = async(req, res) => {
    try {
        const email = req.params.email;
        const result = await User.findOne({email : email});
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get user ${error}`);
        res.status(500).send(`An error from get user ${error}`);
    }
}

const updateUser = async(req, res) => {
    try {
        const userData = req.body;
        const id = req.params.id;
        const query = {_id : id};
        const updateDoc = {
            $set : {
                ...userData
            }
        }

        const result = await User.updateOne(query, updateDoc);
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from update user ${error}`);
        res.status(500).send(`An error from update user ${error}`);
    }
}

const updateUserByEmail = async (req, res) => {
    try {
        const userData = req.body;
        const email = req.params.email;
        const query = {email : email};
        
        const updateDoc = {
            $set : {
                ...userData
            }
        }

        const result = await User.findOneAndUpdate(query, updateDoc);
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from update user ${error}`);
        res.status(500).send(`An error from update user ${error}`);
    }
}

const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const query = {_id : id};
        const result = await User.deleteOne(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from delete user ${error}`);
        res.status(500).send(`An error from delete user ${error}`);
    }
}

module.exports = {
    postUser,
    getUserByEmail,
    getAllUser,
    updateUser,
    deleteUser,
    updateUserByEmail
}