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
}
};  


