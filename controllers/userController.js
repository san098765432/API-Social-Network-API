const req = require("express/lib/request");
const { User, Thought } = require("../models");

const userQueries = {
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).json(err);
        console.log(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "No user found with this ID, please try again." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .json({ message: "No user has been found with this ID, please could you try again." });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .json({ message: "No user has been found with this ID, please try again." });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "No user has been found with this ID, please could you try again." })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "No user has been found with this ID, please could you try again",
            })
          : res.json({ message: "Friend has been successfully removed! " })
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userQueries;