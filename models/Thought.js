// Importing functions required from mongoose library
const { Schema, model } = require('mongoose');


//defining the schema
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


  // creating a new instance of the thought schema
  const schema = new Schema(thoughtSchema);

  //create the model
  const Thought = model ('Thought', schema);

  module.exports = Thought;
  
