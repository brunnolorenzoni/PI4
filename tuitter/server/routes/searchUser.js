const router = require('express').Router();

const searchController = require('../controllers/searchController');
const tokenController = require('../controllers/tokenController');

router.post('/', tokenController.validation, searchController.search);

module.exports = router;