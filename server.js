/**
 * Filename: server.js
 *
 *
 * Author: Bryle Castro
 **/
const express = require('express');
const app = express();

app.use(express.static('static_files'));
// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
    
});