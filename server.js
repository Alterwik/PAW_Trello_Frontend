//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/node_modules'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/src/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running at ${port}`));



// app.listen();

// console.log('App running on');