//dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose;

// schema
const bakerSchema = new Schema ({
    name: { 
        type: String,
        required: true,
        enum: ['Brenda', 'Ernesto' , 'Mia', 'Titi', 'Luz', 'Teddy']
    },
    startDate: { type: Date },
    bio: { type: String }
})

//model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker