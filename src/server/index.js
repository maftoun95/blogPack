var PORT = 5050;
var express = require('express');
var app = express();

app.use(express.static('client'))

// app.get('/', function(req, res){
//     res.send('ey bay bay')
// })

app.listen(PORT, function(){
    console.log('Running on port ${PORT}')
})