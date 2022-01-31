const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Please enter your thoughts',
      minlength: 1,
      maxlength: 128,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter method to format the timestamp on query
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
    },
    id: false,
  }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;