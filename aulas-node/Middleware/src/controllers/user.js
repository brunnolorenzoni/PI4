const Produto = require('../models/user')


exports.setUser = (req, res, next) => {
    let novoProduto = new Produto(req.body);        
    novoProduto.save((err, produto) => {
        if(err){
            res.send(err);
        }    
        res.status(201).json(produto);
        
    });
};
exports.updateUser = (req, res, next) => {
    let id = req.params.id;
    let produtoAtualizar = req.body;
    Produto.findOneAndUpdate({ _id: id }, produtoAtualizar, { new: true }, (err, produtoAtual) => {
        if(err){
            res.send(err);
        }
        res.json(produtoAtual);
    });
};
exports.deleteUser = (req, res, next) => {
    let id = req.params.id;
    Produto.findOneAndDelete({ _id: id }, (err, produtoAtual) => {
        if(err){
            res.send(err);
        }
        res.json(produtoAtual);
    });
};

exports.getUser = (req, res, next) => {
    let id = req.params.id;
    Produto.findById(id, (err, produto) => {
        if(err)
            res.status(500).send(err);        
        res.json(produto);
    });
};

exports.search = (req, res, next) => {
    if (req.query && req.query.nome){
        const paramNome = req.query.nome;
        Produto.find({nome: paramNome}, (err, produtos) => {
            if(err){
                res.status(500).send(err);
            }
            res.json(produtos);
        });
    }
}

exports.getUsers = (req, res, next) => {
    Produto.find({},(err, produtos) => {
        if(err){
            res.status(500).send(err);
        }
        res.json(produtos);
    });
    
};