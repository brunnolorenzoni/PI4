const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos')

router.get('/', controller.listar);
router.post('/', controller.inserir);
router.get('/:id', controller.buscarPorId);
router.get('/search', controller.procurar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;
