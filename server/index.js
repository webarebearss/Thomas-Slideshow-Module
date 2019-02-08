const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db');

let port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  console.log('Heard a GET request');
  db.from('images').select('*').where('listingId', '=', req.params.listingId).orderBy('imgOrder')
    .then(images => {
      console.log('Here are the images------------------------', images)
      res.send(JSON.stringify(images))
    })
    .then(() => console.log('...images sent! ------------------------'))
    .catch(err => {
      console.log('Database retrieval failed------------');
      throw err;
    })
    .finally(() => db.destroy());
})

app.listen(port);
console.log('Listening on port', port);