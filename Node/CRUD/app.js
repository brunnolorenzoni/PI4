var express = require('express');
const app = express();

//Rotas
const rotaProduto = require('./rotas/produtos');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/produtos', rotaProduto);

app.listen(3000, function () {
  console.log('Executando servidor na porta 3000!');
});