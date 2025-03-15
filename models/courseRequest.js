const mongoose = require('mongoose');

const courseRequestSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        require : true,
    },
    transactionID : {
        type : String,
        required : true 
    },
    student : {
        type : Object,
        required: true,
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        }
    },
    status : {
        type : String,
        enum : ['Pending', 'Accepted']
    },
    privateGroup : {
        type : String,
    }
})

const courseRequest = mongoose.model('CourseRequest', courseRequestSchema);
module.exports = courseRequest;