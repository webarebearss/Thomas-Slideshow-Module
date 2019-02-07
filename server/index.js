const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db');

let port = 3000;

app.get('rooms/:listingId/images', cors(), (req, res) => {
  // call database
})

app.listen(port);
console.log('Listening on port', port);