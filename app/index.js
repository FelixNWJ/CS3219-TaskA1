const express = require('express');
const path = require('path');
const app = express();

app.set('port', 8080);

app.use(express.static(path.join(__dirname, './')));

const server = app.listen(app.get('port'), function() {
  console.log('The server is running on: ' + app.get('port'));
});