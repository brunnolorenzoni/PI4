const router = require('express').Router();

const tuitteController = require('../controllers/tuitteController');
const tokenController = require('../controllers/tokenController');

router.get('/profile', tokenController.validation, tuitteController.getMyTuittes);
router.get('/', tokenController.validation, tuitteController.getAllTuittes);
router.post('/', tokenController.validation, tuitteController.setTuittes);

module.exports = router;