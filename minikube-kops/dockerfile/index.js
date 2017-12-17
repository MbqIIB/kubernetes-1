var express = require('express');
var app = express.createServer();

// Your own super cool function
var logger = function(req, res, next) {
    console.log("GOT REQUEST !");
    next(); // Passing the request to the next handler in the stack.
}

app.configure(function(){
    app.use(logger); // Here you add your logger to the stack.
    app.use(app.router); // The Express routes handler.
});

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);
