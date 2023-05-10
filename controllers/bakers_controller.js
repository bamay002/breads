const express = require('express')
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

const bakers = express.Router()

//ONE-TIME BAKER SEED DATA
bakers.get('/data/seed', (req,res) => {
    //Uncomment to insert seed bakers data by typing in website: http://localhost:3003/bakers/data/seed
    //Baker.insertMany(bakerSeedData)
        //.then(res.redirect('/breads'))
    res.redirect('/breads')
})

//INDEX - READ ALL BAKERS
bakers.get('/', (req,res) => {
    Baker.find()
    .populate('breads')
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

//DETAIL - SHOW PAGE
bakers.get('/:id', (req,res) => {
    const id = req.params.id
    Baker.findById(id)
    .populate({
        path: 'breads',
        options: { limit: 2 }
    })
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

//DELETE ROUTE
bakers.delete('/:id', (req,res) => {
    const id = req.params.id
    Baker.findByIdAndDelete(id)
    .then(deleteBaker => {
        res.status(303).redirect('/breads')
    })
})


module.exports = bakers
