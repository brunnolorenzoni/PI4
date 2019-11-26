const router = require('express').Router();

const searchController = require('../controllers/searchController');
const tokenController = require('../controllers/tokenController');

router.post('/user', tokenController.validation, searchController.searchUser);

module.exports = router;