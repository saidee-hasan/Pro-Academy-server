require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//all router imports here
const jwtHandler = require('./routes/jwtHandler');
const userHandler = require('./routes/userHandler');
const addCourseHandler = require('./routes/addCourseHandler');
const courseRequestHandler = require('./routes/courseRequestHandler')

//app and middleware
const app = express();
app.use(express.json());

app.use(cors({
    origin : [
        'http://localhost:5173', 
        'https://virtual-academy-bd-6f763.web.app',
        'https://virtual-academy-bd-6f763.firebaseapp.com',
        'https://Pro  Academy .com',
        'https://www.Pro  Academy .com'
        ],
    credentials : true,
    optionsSuccessStatus : 200
}));

app.use(cookieParser());

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

//Database connection
const uri = `mongodb+srv://${DB_NAME}:${pass}@bistro-boss.mtnkq.mongodb.net/?retryWrites=true&w=majority&appName=bistro-boss`;

mongoose.connect(uri)
.then(() => {
    console.log(`Database connected`);
})
.catch(err => {
    console.log(`error from db connection ${err}`);
})

//all router here
app.use('/jwt', jwtHandler);
app.use('/users', userHandler);
app.use('/courses', addCourseHandler);
app.use('/course-request', courseRequestHandler);

app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING`);
})

app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})