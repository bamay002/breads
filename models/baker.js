//dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose;
const breaD = require('./bread')

// schema
const bakerSchema = new Schema (
    {
    name: { 
        type: String,
        required: true,
        enum: ['Brenda', 'Ernesto' , 'Mia', 'Titi', 'Luz', 'Teddy']
    },
    startDate: { type: Date },
    bio: { type: String },
    },
    { toJSON: { virtuals: true } }
)

// virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

//model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker