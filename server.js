const express = require('express');
const db = require("./connection/connection");


const routes = require('./routes');

//Setting up a PORT connection and creating an express app
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

db.once("open", () => {
  console.log("database connected")
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});


  