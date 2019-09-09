const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Improt Routes
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => 
    console.log("Connect DB!!!")
);

//Middleware
app.use(express.json())
//Route Middleware
app.use('/api/user', authRoute)


app.listen(3001)