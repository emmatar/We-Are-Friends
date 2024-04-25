// Defining Schema, model
const { Schema, model, Types } = require('mongoose');
// Using moment for date formatting
const moment = require('moment');
// calling reaction schema from Reaction.js file
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

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('formattedDate').get(function () {
    return moment(this.createdAt).format('MMM DD, YYYY [at] hh:mm a')
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;