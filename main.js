// SETUP
let PORT = 8989;
var express = require('express');
var app = express();

// ROUTES
var blue = require('./blue');
var red = require('./red');
var home = require('./home');

app.use('/', blue);
app.use('/', red);
app.use('/', home);

// LISTENER
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});

// END OF FILE