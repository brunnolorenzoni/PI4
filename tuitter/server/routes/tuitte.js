const router = require('express').Router();

const tuitteController = require('../controllers/tuitteController');
const tokenController = require('../controllers/tokenController');

router.get('/', tokenController.validation, tuitteController.getTuittes);

module.exports = router;