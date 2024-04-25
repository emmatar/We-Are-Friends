// Defining Schema, model
const { Schema, model } = require('mongoose');
// Using moment for date formatting
const moment = require('moment');
// calling reaction schema from Reaction.js file
const reactionSchema = require('./Reaction');

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