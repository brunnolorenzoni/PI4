const express = require('express');
const app = express();
const mongoose = require('mongoose')

//Importa Rotas
const rotaProduto = require('./rotas/produtos');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Configuração do ongoose
mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://localhost/app-produtos')
  .then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD');
  });
mongoose.Promise = global.Promise;

//Uso das rotas
app.use('/api/produtos', rotaProduto);

app.listen(3000, function () {
  console.log('Executando servidor na porta 3000!');
});