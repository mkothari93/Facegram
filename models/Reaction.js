const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({

reactionId: {
    type: Schema.Types.ObjectId,
    default: () => Types.ObjectId()
},
reactionBody: {
    type: String,
    required: 'Text is Required',
    maxlength: 280
},
username: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    default: Date.now,
    //getter method to format the timestamp on query
}
});


module.exports = ReactionSchema;
