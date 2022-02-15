const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const categoryRouter = require('./routes/category-router');
const sizeRouter = require('./routes/size-router');
const colorRouter = require('./routes/color-router');
const garmentRouter = require('./routes/garment-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

// Middlewares
server.use(morgan('tiny'));
// server.use(express.static('public'));
server.use(cors(corsOptions));
server.use(express.json());

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/sizes', sizeRouter);
server.use('/api/colors', colorRouter);
server.use('/api/clothes', garmentRouter);

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
