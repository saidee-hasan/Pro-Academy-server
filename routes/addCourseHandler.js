const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const { postCourse, getCourses, getSingleCourse, deleteCourse, updateCourse } = require('../controllers/addCourseController');

router
    .route('/')
    .post(verifyToken, verifyAdmin, postCourse)
    .get(getCourses)

router
    .route('/:id')
    .get(getSingleCourse)
    .delete(verifyToken, verifyAdmin, deleteCourse)
    .patch(verifyToken, verifyAdmin, updateCourse)

module.exports = router;