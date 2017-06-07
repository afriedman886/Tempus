const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.listen(3000, function() {
  console.log('listening on 3000')
})

