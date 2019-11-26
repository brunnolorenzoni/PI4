const router = require('express').Router();

const followController = require('../controllers/followController');
const tokenController = require('../controllers/tokenController');

router.post('/:idToFollow', tokenController.validation, followController.follow);
router.get('/followers', tokenController.validation, followController.listFollowers);
router.get('/following', tokenController.validation, followController.listFollowing);

module.exports = router;