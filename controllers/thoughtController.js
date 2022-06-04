const { Thought , User } = require('./../models');


const thoughtController = {
  getAllThoughts (req, res) {
    Thought.find()
    .then((thoughtData)=> { 
      res.json(thoughtData)
    })
  },

  getOneThought (req,res){
    Thought.findOne({_id:red.params.thoughtId})
    .then((thoughtData)=> { 
      if (!thoughtData){
        return res.status(404).json({message:" No thought with this Id"})
      }
      res.json(thoughtData)
    })
  
  },

  createThought (req, res) {
    Thought.create(req.body)
    .then((thoughtData)=>{
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        {$push:{thoughts:thoughtData._id}},
        {new:true}
      )
    }).then((userData) => { 
      if (!userData){
       return res.status(404).json({message:" No user with this Id"})
      }
      res.json(userData)
    })
  },

  deleteThought (req, res) {
    Thought.findOneAndDelete ({ _id: req.params.thoughtId}
    )
    .then((deletingAThought) => {
      res.json(deletingAThought)
    } ).catch ((err) => {res.status(500).json({err})})
    
},


updateThought (req, res) {
  Thought.findOneAndUpdate ({ _id: req.params.thoughtId})
.then((updatingThought) => {
  res.json(updatingThought)
}).catch ((err) => {res.status(500).json({err})})

}

}


module.exports = thoughtController
