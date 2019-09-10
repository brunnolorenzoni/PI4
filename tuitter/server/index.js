const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Improt Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const tuitteRoute = require('./routes/tuitte');

dotenv.config();

mongoose.connect(
    //process.env.DB_CONNECT, 
    'mongodb://localhost:27017/tuitter',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => 
    console.log("Connect DB!!!")
);

//Middleware
app.use(express.json())
//Route Middleware
app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/tuitte', tuitteRoute)

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(3001)