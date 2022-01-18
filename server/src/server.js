const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const typesRouter = require('./routes/types-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION } = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

// Response handlers
server.use('/api/types', typesRouter);

server.listen(SERVER_PORT, () => {
  console.log(`Page is running on http://localhost:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenu bazes')
    } catch (error) {
      console.log('Nepavyko prisijungti')
    }
  })();
});
