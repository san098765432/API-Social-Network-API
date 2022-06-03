const mongoose = require('mongoose');
const { Thought } = require('../models');


const thoughts = [
    { thought:'I am happy'},
    { thought:'I am excited'},
    { thought:'I am going on holiday!'},
    { thought:'I am bored'},
];

const init = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myfirstmongooseapp',{
            userNewUrlParser: true,
            useUnifiedTopology: true,
          });
      
    
          console.log("[INFO]: Database connection has been successful");
        
          await Thought.deleteMany({});
          await Thought.insertMany(thoughts);

          console.log("[INFO]: Database seeded successfully");
          await mongoose.disconnect();
        } catch (error) {
            console.log(`[ERROR]: Failed to get all the data | ${error.message}`)
        }
    };

    init();