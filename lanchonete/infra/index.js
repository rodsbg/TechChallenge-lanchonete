const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

MongoClient.connect('mongodb://mongodb:27017', (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }

  const db = client.db('mydb');
  // Start using the MongoDB database connection here

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});