// Require schema and model from mongoose
const { Schema, model } = require('mongoose');


//Configuring individual properties using Schema Types
const thoughtSchema = new Schema(
    {
      thoughtText: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength : 280,
        
    },

    createdAt: { 
       type: Date,
       default: Date.now, 
       get : timestamp => dateFormat(timestamp),
    },

    username: {
        type: String,
        required: true,
    },

  },
  
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },

      id: false,
    }
  );


  module.exports = Thought;
  
