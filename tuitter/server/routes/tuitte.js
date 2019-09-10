const router = require('express').Router();
const verify = require('../validations/tokenValidation');
const User = require('../models/User');
const tuitteController = require('../controllers/tuitteController');

router.get('/', verify, tuitteController.getTuittes);

module.exports = router;