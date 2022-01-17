const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const clothesRouter = require('./routes/clothes-router');

const server = express();
const { SERVER_PORT } = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

// Response handlers
server.use('/api/clothesTypes', clothesRouter);

server.listen(SERVER_PORT, () => {
  console.log(`Page is running on http://localhost:${SERVER_PORT}/`);
});
