const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async getSingleThought (req,res) {
        try {
            const singleThought = await Thought.findOne( 
                { _id: req.params.thoughtId }
            ).populate('reactions');
            res.json(singleThought);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async createThought (req, res) {
        try {
            const createThought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            )
            res.json(createThought);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async updateThought (req,res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
        if (!updateThought) {
            res.status(404).json({ message: "No thought with this id!" })
        }
        res.json(updateThought);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async deleteThought (req,res) {
        try {
            const deleteThought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }
            );
        if (!deleteThought) {
            res.status(404).json({ message: "No thought with this id!" })
        }
        await Thought.deleteMany({ _id: { $in: deleteThought.reactions } })
        res.json({ message: 'Thought deleted!' })
    } catch (error) {
            res.status(500).json(error)
        }
    },
    async addReaction (req,res) {
        try {
            const addReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { runValidators: true, new: true }
            ).populate('reactions');
            res.json(addReaction);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async removeReaction (req,res) {
        try {
            const removeReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { runValidators: true, new: true }
            )
        } catch (error) {
            res.status(500).json(error)
        }
    }
}