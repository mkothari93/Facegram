const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtsId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;