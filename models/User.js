// Require schema and model from mongoose
const mongoose = require('mongoose');

//Configuring individual properties using Schema Types
const userSchema = new mongoose.Schema(
    {
      username: { 
        type: String,
        required: true,
        unique: true
        trim: true
    },

    email: { 
        type: String, 
        required: true,
        unique: true,
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
      }],

    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );


  module.exports = User;
  