const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

//Setting up a PORT connection and creating an express app
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); 

const init = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myfirstmongooseapp',{
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });


    console.log("[INFO]: Database connection has been successfull");

    app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Database connection has failed | ${error.message}`);
  }  
};

init()



  