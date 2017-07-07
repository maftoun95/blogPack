var PORT = 5050;
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'/node_modules')));

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'react');

app.get('/', function(req, res){
    res.render('index');
});

app.listen(PORT, function(){
    console.log('Running on port ${PORT}')
});