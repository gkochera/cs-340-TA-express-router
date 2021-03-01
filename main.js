// SETUP
let PORT = 8989;
var express = require('express');
var app = express();

// ROUTES
var blue = require('./blue'); // These are each basically imports of the other files, you don't need the js file extension
var red = require('./red');
var home = require('./home');

app.use('/', blue); // We are saying in each of these that any route starting with /, to use these special files
app.use('/', red);
app.use('/', home);

// If I had app.use('/test', blue) in this file, and blue.js has a router.get('/blue'), then I would have to enter "localhost:8989/test/blue" in
// my browser to access the page. They basically concatenate.

// LISTENER
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});

// END OF FILE