const moment = require('moment');

// Define Mongoose
const { Schema, Types } = require('mongoose');

//  Define the shape of the documents within the collection.
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false,
    }
  );

  reactionSchema.virtual('formattedDate').get(function () {
    return moment(this.createdAt).format('MMM Do, YYYY [at] hh:mm a')
  })
  
  module.exports = reactionSchema;