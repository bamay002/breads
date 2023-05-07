const express = require('express');
const breads = express.Router();
const breaD = require('../models/bread.js');
const Baker = require('../models/baker.js')
//const Index = require('../views/index.jsx');

//INDEX - READ ALL

breads.get('/', (req,res) =>{
    breaD.find().then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
        }); 
    })
})

//NEW
breads.get('/new', (req,res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
})

//EDIT
breads.get('/:id/edit', (req,res) => {
    const id = req.params.id

    breaD.findById(id).then(foundBread => {
        res.render('edit', {
            bread: foundBread
        })
    })
})

//SHOW - READ ONE
breads.get('/:id', (req,res) => {
    const id = req.params.id
    breaD.findById(id)
        .then((foundBread) => {
            if (foundBread === null){
                res.send('404 - Bread not found')
            } else{
                console.log(foundBread.getBakedby())
                res.render('show', {
                bread: foundBread
            })
        }
        })
        .catch((err) => {
            res.send('500 - Service Error')
        })  
})


 /*   const arrayIndex = req.params.arrayIndex;
    if (breaD[arrayIndex]){
        res.render("show", {
            bread: breaD[arrayIndex],
            index: arrayIndex,
        })
    } else {
        res.send('404')
    }
})      */


//CREATE
breads.post('/', (req,res) => {
    let newBread = {...req.body}

    //Default bread image
    if (newBread.image === ''){
        newBread.image = undefined
    }

    //Process hasGluten checkbox
    if (newBread.hasGluten === 'on'){
        newBread.hasGluten = true
    } else if (newBread.hasGluten === 'off'){
        newBread.hasGluten = false
    } else {
        console.error('ERROR: Has Gluten value is: ', newBread.hasGluten)
    }
breaD.create(newBread)
res.redirect('/breads')
})

//UPDATE
breads.put('/:id', (req, res) => {
    const id = req.params.id
    let updatedBread = {...req.body}

    //Default Bread Image
    if (updatedBread.image === ''){
        updatedBread.image = 'https://cdn-tp4.mozu.com/27977-44902/cms/44902/files/202300002408.jpg'
    }
    // Process hasGluten Checkbox
    if (updatedBread.hasGluten === 'on'){
        updatedBread.hasGluten = true;
    }
    else {
        updatedBread.hasGluten = false
    }

    breaD.findByIdAndUpdate(id, updatedBread, { new: true }).then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${id}`)
    })
})

//DELETE
breads.delete('/:id' , (req,res) => {
    const id = req.params.id
    breaD.findByIdAndDelete(id).then(deletedBread =>{
    res.status(303).redirect('/breads')
    })
})



//EXPORT
module.exports = breads;

