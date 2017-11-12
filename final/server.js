// Imports the library "express"
const express = require('express');

// Creates an instance of the HTTP server
const app = express();
app.set('view engine', 'hbs');


// Creates an endpoint at your web application's root.
// An endpoint is a way to connect the client and server by
// means of a pathway URL.
// Root in this case means there is no extended URL path
// and to access the base directory of the server.
// An example is https://github.com/ is the root endpoint
// whereas https://github.com/acm-hackschool-f17/ has an
// endpoint of /acm-hackschool-f17
app.get('/', function (request, response) {
  response.render('home', {
    title: "Title from Server",
    content: "This is a sentence sent from the server."
  });
});

app.get('/burrito', (req, res) => {
  res.send("Hello I am a burrito");
});

// Starts your server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});