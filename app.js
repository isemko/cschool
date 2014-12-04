var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.write('Hellow World');
	response.end();
	console.log('request')
});
app.get('/blocks', function(request, response){
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	//response.send(blocks);
	//response.json(blocks);
	//perm redirect 301
	response.redirect(301, '/parts');

});

app.listen(3000, function(){
		console.log('running on port 3000');
});


//1.1
var express  = require('express');

var app = express();

app.get('/locations', function(request, response){
  	
  response.send(['Caspiana', 'Indigo', 'Paradise']);
  
});

app.listen(3001, function(){
 
  	console.log('Running express');
  
});

//1.6
var express = require('express');
var app = express();

app.get('/cities', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
app.get('/locations', function(request, response){
  
  response.redirect(301, '/cities');
  
});


app.listen(3001, function () {
  console.log("Running Express");
});
