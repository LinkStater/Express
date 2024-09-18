const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send("<p>Testando Aplicação NODE.JS</p>")
});

app.listen(3000);