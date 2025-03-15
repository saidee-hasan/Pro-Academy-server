const express = require('express');
const { postJwt, clearCookie } = require('../controllers/jwtController');
const router = express.Router();

router
    .route('/')
    .post(postJwt)
    .get(clearCookie)

module.exports = router;