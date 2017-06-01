const express = require('express');
// Express is powerup. Grabbing everything from the folder
const server = express();
// A fucntion that returns a complex object with lots of configs and such
const port = 8080; //door number

// What do we want to expose to the public? Slash browser?
// __dirname is node only
//__dirname refers to the directory that the file is within
server.use(express.static(__dirname + '/public'));
// This code says "hey, whatever is here, serve it up to whoever asks for it"

server.get('/counter', (request, response) => {
  // response.send('It works');
  response.sendFile('public/html/index.html', {root: __dirname});
}); //this is a static file server
server.listen(port, () => {
  console.log('Now listening on port ', port);
})
