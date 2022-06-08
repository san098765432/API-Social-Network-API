//Importing the mongoose library
const mongoose = require('mongoose');

// Wrapping Mongoose around local connection to MongoDB- check this link in red???
mongoose.connect('mongodb://127.0.0.1:27017/API-Social-Network-API', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

// Exporting connection back to server.js
module.exports = mongoose.connection;
