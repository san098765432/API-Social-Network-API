const router = require('express').Router()

const { 
    getAllThoughts ,
    getOneThought,
    createThought ,
    deleteThought,
updateThought
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought)


// /api/thoughts/thoughtId
router.route('/:thoughtId').get(getOneThought).put(updateThought)
.delete(deleteThought)


module.exports = router 