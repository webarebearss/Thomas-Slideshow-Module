const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('../db/index');
const dbutils = require('../db/dbutils');
const create = require('../db/index')

const port = process.env.PORT || 3001;

app.use('/rooms/:listingId/', express.static(__dirname + '/../client/dist'));

knex.initialize();

app.post('/rooms/:listingId/images', (req, res) => {

})

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  console.log('Heard a GET request');
  dbutils.fetchImages(req.params.listingId)
    .then(images => {
      res.send(JSON.stringify(images))
    })
    .then(() => console.log('...images sent'))
    .catch(err => {
      console.log('Database retrieval failed', err);
    })
})

app.put('/rooms/:listingId', (req, res) => {

})

app.delete('/rooms/:listingId', (req, res) => {

})

app.listen(port);
console.log('Listening on port', port);