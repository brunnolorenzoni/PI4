const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var cors = require('cors');



//Improt Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const tuitteRoute = require('./routes/tuitte');
const followRoute = require('./routes/follow');
const unfollowRoute = require('./routes/unfollow.js');
const searchRoute = require('./routes/search.js');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, 
    //'mongodb://localhost:27017/tuitter',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => 
    console.log("Connect DB!!!")
);

//Middleware
app.use(express.json())
app.use(cors())

//Route Middleware
app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/tuitte', tuitteRoute)
app.use('/api/search', searchRoute)
app.use('/api/follow', followRoute)
app.use('/api/unfollow', unfollowRoute)

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(3001)