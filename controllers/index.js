const { Thought } = require('./../models');

const createThought = (req, res) => {
    const newThought = new Thought({ name: req.params.genre });
    newThought.save();
    if (newThought) {
      res.status(200).json(newThought);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  };
  

const getAllThoughts = (req, res) => {
    Thought.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  };
  

  //missing one here

const  deleteThought = (req, res) => {
    Thought.findOneAndDelete({ name: req.params.genre }, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  }


const updateThought = (req, res) => {//TO-DO}; 




module.exports = {
createThought,
getAllThoughts,
 deleteThought,
updateThought,
}
