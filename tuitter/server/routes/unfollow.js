const router = require('express').Router();

const unfollowController = require('../controllers/unfollowController');
const tokenController = require('../controllers/tokenController');

router.post('/:idToUnfollow', tokenController.validation, unfollowController.unfollow);

module.exports = router;