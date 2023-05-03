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

//NEW
breads.get('/new', (req,res) => {
    res.render('new')
})


//SHOW - READ ONE?
breads.get('/:arrayIndex', (req,res) => {
    const arrayIndex = req.params.arrayIndex;
    if (breaD[arrayIndex]){
        res.render("show", {
            bread: breaD[arrayIndex],
            index: arrayIndex,
        })
    } else {
        res.send('404')
    }
})


//CREATE
breads.post('/', (req,res) => {
    let newBread = {...req.body}

    //Default bread image
    if (newBread.image === ''){
        newBread.image = 'https://cdn-tp4.mozu.com/27977-44902/cms/44902/files/202300002408.jpg'
    }

    //Process hasGluten checkbox
    if (newBread.hasGluten === 'on'){
        newBread.hasGluten = true
    } else if (newBread.hasGluten === 'off'){
        newBread.hasGluten = false
    } else {
        console.error('ERROR: Has Gluten value is: ', newBread.hasGluten)
    }
breaD.push(newBread)
res.redirect('/breads')
})

//DELETE
breads.delete('/:arrayIndex' , (req,res) => {
    const arrayIndex = req.params.arrayIndex
    breaD.splice(arrayIndex, 1)
    res.status(303).redirect('/breads')

})



//EXPORT
module.exports = breads;

