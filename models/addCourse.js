const mongoose = require('mongoose');

const addCourseSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    coursePrice : {
        type : Number,
        required : true
    },
    discount : {
        type : Number,
        required : true
    },
    privateGroup : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
})

const addCourse = mongoose.model("Course", addCourseSchema);

module.exports = addCourse;