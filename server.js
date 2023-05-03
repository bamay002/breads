const express = require('express');

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT;
console.log('My port is:', PORT);

const app = express();


//MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

//bread ROUTES
const breadsController = require('./controllers/bread_controller.js');
app.use('/breads', breadsController)

//404 page
app.get('*', (req,res) => {
    res.send('404')
})

/* Note on what is happening in routes
Express:
localhost:3003/ = "Welcome to an Awesome App about Breads!"
localhost:3003/breads/  = breadController   = "This is the index at /bread"
*/


//LISTEN
app.listen(PORT,() => {
    console.log('Server is listening on port', PORT)
})