const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
  await client.connect();
})();

app.get('/', async (req, res) => {
  await client.set('key', 'Hello from Node.js');
  const value = await client.get('key');
  res.send(value);
});

app.listen(3000, () => console.log('Server running on port 3000'));