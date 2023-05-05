//IMPORT MONGOOSE
const mongoose = require('mongoose')

//CREATE A SHORTHAND FOR THE SCHEMA CONSTRUCTOR
const { Schema } = mongoose;

//CREATE BREAD SCHEMA
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String, default: 'https://cdn-tp4.mozu.com/27977-44902/cms/44902/files/202300002408.jpg' },
  baker: {
    type: String,
    enum: ['Brenda', 'Ernesto', 'Mia', 'Titi', 'Luz', 'Teddy']
  }
})

//HELPER METHODS
breadSchema.methods.getBakedby = function() {
  return `${this.name} was baked with ♡ by ${this.baker || 'an unknown baker'}`
}

//create bread modle
const breaD = mongoose.model('Bread', breadSchema)

// export bread model
module.exports = breaD;


/*module.exports = [
    {
      name: 'Rye',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'French',
      hasGluten: true,
       image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Gluten-Free',
      hasGluten: false,
      image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'Pumpernickel',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    }
  ]
  */