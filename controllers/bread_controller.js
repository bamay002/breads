const express = require('express');
const breads = express.Router();
const breaD = require('../models/bread.js');
//const Index = require('../views/index.jsx');

//INDEX - READ ALL

breads.get('/', (req,res) =>{
    //res.send(breaD);
    res.render('index', 
    {
        breads: breaD,
    });
})

//SHOW - READ ONE?
breads.get('/:arraryIndex', (req,res) => {
    const arraryIndex = req.params.arraryIndex;
    res.send(breaD[arraryIndex]);
})


//EXPORT
module.exports = breads;

