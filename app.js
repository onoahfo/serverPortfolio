const express = require('express')
const app = express()

//middleware here
app.set("view engine", "ejs");

//making ccs readable by js
app.use(express.static('./public'));

//linking localhost:3000 to specific files
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});
 
app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

//error message
app.listen(3000, function(err){
    if(err){
        console.log(err)
    }
    console.log('Server is live on port 3000')
});