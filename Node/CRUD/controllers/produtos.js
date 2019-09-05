exports.inserir = (req, res, next) => {
    const produto = req.body;
    res.status(201).json(produto);
};
exports.atualizar = (req, res, next) => {
    let id = req.params.id;
    res.send(`Atualizando o produto com id ${id}`);
};
exports.deletar = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Deletando o produto com id ${id}`);
};

exports.buscarPorId = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Retornando o produto com id ${id}`);
};

exports.procurar = (req, res, next) => {
    if (req.query && req.query.nome){
        let nome =  req.query.nome;
        res.send(`Retornando nome ${nome}`);
    }
}

exports.listar = (req, res, next) => {
    let produtos = [];
    produtos.push({
        'id': 1,
        'nome': "mesa",
        'preco': 440.00
    });
    produtos.push({
        'id': 2,
        'nome': "cadeira",
        'preco': 170.00
    });

    res.json(produtos);
};