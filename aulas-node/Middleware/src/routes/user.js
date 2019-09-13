const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.setUser);
router.get('/search', controller.search);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
