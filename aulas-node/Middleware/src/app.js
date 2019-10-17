const express = require('express');
const app = express();
const mongoose = require('mongoose')

//Importa Rotas
const rotaProduto = require('./routes/user');

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};


app.use(myLogger)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Configuração do ongoose
mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://localhost/app')
  .then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD');
  });
mongoose.Promise = global.Promise;

//Uso das rotas
app.use('/api/user', rotaProduto);


app.listen(3000, function () {
  console.log('Executando servidor na porta 3000!');
});