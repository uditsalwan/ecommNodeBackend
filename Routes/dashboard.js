const express = require('express');
const router = express.Router();
const path= require('path');

router.get('/', async (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, '/jsonResponses/dashboard.json'));   
    console.log(__dirname); 
});

module.exports = router;