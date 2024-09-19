const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pagina1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pagina1.html'));
});

app.get('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pagina2.html'));
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
