const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,

} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts)

router.route('/:userId').post(createThought)

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route("/:thoughtId/reaction").post(addReaction); 



router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;