const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://mongo:27017';
const dbName = 'mydb';

app.get('/', async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('items');
    await collection.insertOne({ message: 'Hello from Node.js' });
    const result = await collection.findOne({ message: 'Hello from Node.js' });
    res.send(result.message);
  } catch (err) {
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));