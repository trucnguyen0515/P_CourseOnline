const express = require('express');
const app = express();
const path = require('path');
var compression = require('compression');
app.use(compression());

app.use(express.static(path.join(__dirname,"build")));
// app.use(express.static(path.join(__dirname,"Public","images")))

// app.use(express.static('Public'));
app.set('view engine','ejs');
app.set('views','./build');



app.get('*', function (req, res, next) {
    res.setHeader("Cache-Control", "build, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  next();
});


app.listen(process.env.PORT || 3500, function(){
    console.log('Server started!');
})


app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/', function(req,res){
    res.render('indexUser');
})

app.get('/login', function(req,res){
    res.render('indexLogin');
})

app.get('/register', function(req,res){
    res.render('indexRegister');
})

app.get('/course', function(req,res){
    res.render('indexCourse');
})

app.get('/detailcourse', function(req,res){
    res.render('indexDetailCourse');
})

app.get('/user', function(req,res){
    res.render('userDetail');
})

app.get('/admin', function(req,res){
    res.render('indexAdmin');
})