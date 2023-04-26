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
    if (breaD[arraryIndex]){
        res.render("show", {
            bread: breaD[arraryIndex]
        })
    } else {
        res.send('404')
    }
})



//EXPORT
module.exports = breads;

