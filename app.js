const express = require('express');
const os = require('os');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world from Docker Swarm [${os.hostname}]`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
