var express=require('express'),
	app=express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

// truy van benh nhan

var oc = require('orthanc-client');
var client = new oc({
    url: 'http://localhost:8042',
    auth: {
      username: 'foo',
      password: 'bar'
    }
});

app.get("/benhnhan",function(request, response){
	client.instances.getAll()
    .then(function(response) {
        response.end(response);
    })
    .catch(function(err) {
        console.log(err);
    });
})





//








var server=require('http').createServer(app);
server.listen(4000,function(){
	console.log('server running on port 4000');
 })

