const router = require('express').Router();

const followController = require('../controllers/followController');
const tokenController = require('../controllers/tokenController');

router.post('/:idToFollow', tokenController.validation, followController.follow);
router.get('/', tokenController.validation, followController.listFollowers);

module.exports = router;