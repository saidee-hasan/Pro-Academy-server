const mongoose = require('mongoose');
const courseRequest = require('../models/courseRequest');

const postCourseRequest = async(req, res) => {
    try {
        const courseData = new courseRequest(req.body);
        const result = await courseData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from add course request ${error}`);
        res.status(500).send(`An error from add course request ${error}`);
    }
}

const getCourseByName = async(req, res) => {
    try {
        const courseName = req.params.courseName;
        const query = {courseName : courseName};
        const result = await courseRequest.findOne(query);
        res.status(200).send(result)
    } catch (error) {
        console.log(`An error from get course request data by email ${error}`);
        res.status(500).send(`An error from get course request data by email ${error}`);
    }
}

const getAllRequest = async(req, res) => {
    try {
        const result = await courseRequest.find({status : "Pending"});
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get all request data ${error}`);
        res.status(200).send(`An error from get all request data ${error}`)
    }
}

const deleteRequest = async(req, res) => {
    try {
        const id = req.params.id;
        const query = {_id : id};
        const result = await courseRequest.deleteOne(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from delete request data ${error}`);
        res.status(200).send(`An error from delete request data ${error}`)
    }
}

const updateRequest = async(req, res) => {
    try {
        const requestData = req.body;
        const id = req.params.id;
        const query = {_id : id};
        const updateDoc = {
            $set : {
                ...requestData
            }
        }

        const result = await courseRequest.updateOne(query, updateDoc);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from update request data ${error}`);
        res.status(200).send(`An error from delete update data ${error}`)
    }
}

const getCourseByEmail = async(req, res) => {
    try {
        const email = req.params.email;
        const query = {"student.email" : email};
        const result = await courseRequest.find(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get course by email ${error}`);
        res.status(200).send(`An error from get course by email ${error}`)
    }
}

module.exports = {
    postCourseRequest,
    getCourseByName,
    getAllRequest,
    deleteRequest,
    updateRequest,
    getCourseByEmail
}