const { User, Thought } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser (req, res) {
        try {
            const singleUser = await User.findOne({ _id: req.params.userId })
            .populate('thoughts').populate('friends')
            if (!singleUser) {
                return res.status(404).json({ message: 'No course with that ID' });
              }
            res.json(singleUser)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async createUser (req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (error) {
            res.status(500).json(error)
        }
    },    
    async updateUser (req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            if (!updateUser) {
                res.status(404).json({ message: 'No user with this id!'})
            }
            res.json(updateUser);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async deleteUser (req, res) {
        try {
            const deleteUser = await User.findOneAndDelete(
                { _id: req.params.userId } 
            )
            if (!deleteUser) {
                res.status(404).json({ message: 'No user with this id!'});
            }
            await Thought.deleteMany({ _id: { $in: deleteUser.thoughts } });
            res.json({ message: 'User deleted!'})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async createFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            )
            if (!user) {
                return res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' });
              }
              res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    async deleteFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            )
            if (!user) {
                return res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' });
              }
              res.json({ message: 'Friend has been deleted!' })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}