const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var db = require('../db');

let port = 3000;

app.use(bodyParser.json());

app.get('rooms/:id/images', cors(), (req, res) => {
  // call database
})

app.listen(port);
console.log('Listening on port', port);