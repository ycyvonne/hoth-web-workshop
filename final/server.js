// Imports the library "express"
const express = require('express');

// Creates an instance of the HTTP server
const app = express();
app.use(express.static('public'));
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

	var images = [
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/1.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/2.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/3.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/4.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/5.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/6.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/7.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/8.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/9.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/10.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/11.jpg?raw=true'
		},
		{
			source: 'https://github.com/acm-hackschool-f17/session-2-learn/blob/master/final/resources/12.jpg?raw=true'
		}
	];
	response.render('home', {
		images: images
	});
});

app.get('/burrito', (req, res) => {
  res.send("Hello I am a burrito");
});

// Starts your server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});