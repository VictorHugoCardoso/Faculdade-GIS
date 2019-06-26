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

const {Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: 'bancodedados',
  port: 5432,
})
client.connect()

client.query('SELECT SUM (moradores) AS totalMoradores FROM edificiosmegavila', (err, res) => {
  console.log(err, res)
  client.end()
})

app.all('/', function (req, res) {
	res.render('index.hbs');
})
