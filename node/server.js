var http = require('http');

var express = require('express');
var handlebars  = require('express-handlebars');
var PORT = process.env.PORT || 3000;

var app = express()
	.engine('.hbs', handlebars({extname: '.hbs', cache: false}))
	.set('view engine', '.hbs')
	.use('/static', express.static('static'));


app.listen(PORT);
console.log('*------------------------------*');  
console.log('Listening on port:' + PORT); 

app.all('/', function (req, res) {
	res.render('index.hbs');
})
