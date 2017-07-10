const PORT = 5050;
const express = require('express');
const app = express();
const reactViews = require('express-react-views');
const path = require('path');

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'/node_modules')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', function(req, res){
    res.render("index");
});
// app.get('/testRoute', function(req, res){
//     res.send('SEE! this route works just fine....');
// });

app.listen(PORT, function(){
    console.log(`Running on port ${PORT}`)
});