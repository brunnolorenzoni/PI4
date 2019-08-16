var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req);
    console.log(res);
    res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/product', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/product', function (req, res) {
    res.send('Got a DELETE request');
});