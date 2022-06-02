//Importing the mongoose library
const mongoose = require('mongoose');

// Wrapping Mongoose around local connection to MongoDB- check this link in red???
mongoose.connect('mongodb://localhost:27017/myfirstmongooseapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Exporting connection back to server.js
module.exports = mongoose.connection;
