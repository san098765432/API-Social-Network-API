// Importing functions required from mongoose library
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require ('./Reaction');


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

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


  //create the model
  const Thought = model ('Thought', schema);

  module.exports = Thought;
  
