const { Router } = require("express");

const {
    createThought,
    getAllThoughts,
    deleteThought,
    updateThought,
} = require('../controllers');


//registering a post request to this endpoint specified 

router.post('/new-thought/:thought', createThought);
router.get('/all-thoughts', getAllThoughts);
router.delete('/find-one-delete/:thought', deleteThought);
router.put('/find-one-update/:thought', updateThought);

//exporting the router
module.exports = router;

