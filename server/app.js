const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  console.log(path.resolve(__dirname, '..', 'build', 'index.html'));
  res.sendFile(path.resolve('..', 'build', 'index.html'));
});

module.exports = app;
