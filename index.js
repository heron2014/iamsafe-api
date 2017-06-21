'use strict';
require('dotenv').config();
require('babel-register')({
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread']
});
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;
const routes = require('./routes');

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
routes(app);

// Server setup
const server = http.createServer(app);
server.listen(port);
console.log('Visit: http://localhost:' + port + '/'); // eslint-disable-line
module.exports = server;
