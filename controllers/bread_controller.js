const express = require('express');
const breads = express.Router();
const breaD = require('../models/bread.js')

//INDEX - READ ALL

breads.get('/', (req,res) =>{
    res.send(breaD);
})

//SHOW - READ ONE?
breads.get('/:arraryIndex', (req,res) => {
    const arraryIndex = req.params.arraryIndex;
    res.send(breaD[arraryIndex]);
})


//EXPORT
module.exports = breads;

