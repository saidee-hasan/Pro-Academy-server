const Courses = require('../models/addCourse');

const postCourse = async(req, res) => {
    try {
        const courseData = new Courses(req.body);
        const result = await courseData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from add course ${error}`);
        res.status(500).send('An error from add course ${error}')
    }
}

const getCourses = async(req, res) => {
    try {
        const result = await Courses.find();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get course ${error}`);
        res.status(500).send(`An error from get course ${error}`)
    }
}

const getSingleCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await Courses.findById(id);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get single course ${error}`);
        res.status(500).send(`An error from single course ${error}`)
    }
}

const deleteCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const query = {_id : id};
        const result = await Courses.deleteOne(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from delete course ${error}`);
        res.status(500).send(`An error from delete course ${error}`)
    }
}

const updateCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const query = {_id : id};
        const courseData = req.body;
        const updateDoc = {
            $set : {
                ...courseData
            }
        }

        const result = await Courses.updateOne(query, updateDoc);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from update course ${error}`);
        res.status(500).send(`An error from update course ${error}`)
    }
}


module.exports = {
    postCourse,
    getCourses,
    getSingleCourse,
    deleteCourse,
    updateCourse
}