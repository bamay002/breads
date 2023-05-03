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

//CREATE
breads.post('/', (req,res) => {
    let newBread = {...req.body}
    if (newBread.hasGluten === 'on'){
        newBread.hasGluten = true
    } else if (newBread.hasGluten === 'off'){
        newBread.hasGluten = false
    } else {
        console.error('ERROR: Has Gluten value is: ', newBread.hasGluten)
    }
breaD.push(newBread)
res.send(breaD)
})



//EXPORT
module.exports = breads;

