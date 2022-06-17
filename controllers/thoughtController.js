const { User, Thought } = require("../models");

module.exports = {
  createThought({ params, body }, res) {
  Thought.create(body)
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { thoughts: _id } },
        { new: true }
      );
    })
    .then((user) => {
      if (!user) {
        res.status(404).json({
          message:
            "Thought has been created, however a user has not been found with the ID entered, please try again.",
        });
        return;
      }

      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
getThoughts(req, res) {
  Thought.find({})
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
},
getSingleThought(req, res) {
  Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message:
              "No thought has been found with this ID, please try again.",
          })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message:
              "No thought has been found with this ID, please try again.",
          })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
deleteThought(req, res) {
  Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message:
              "No thought has been found with this ID, please could you try again.",
          })
        : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
    )
    .then((user) =>
      !user
        ? res.status(404).json({
            message:
              "Thought has been successfully deleted , however no user has been found with this ID, please try  again!",
          })
        : res.json({ message: "Thought successfully created! " })
    )
    .catch((err) => res.status(500).json(err));
},
addReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message:
              "No thought has been found with this ID, please could you try again.",
          })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
removeReaction(req, res) {
  Thought.findByIdAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message:
              "Reaction has been successfully deleted , however no user has been found with this ID, please could you try again!",
          })
        : res.json({ message: "Reaction successfully removed! " })
    )
    .catch((err) => res.status(500).json(err));
},
};  