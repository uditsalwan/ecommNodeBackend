const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path= require('path');
require('dotenv/config');

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); //  "public" off of current is root

//Import routes
const categoryRoute = require('./Routes/category');
const dashboardRoute = require('./Routes/dashboard');

app.use('/category', categoryRoute);
app.use('/dashboard', dashboardRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are at home');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=> {
    console.log('connected to db');
});

app.listen(3000);
