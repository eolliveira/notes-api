const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./routes/usuario');
const checklist = require('./routes/checklist');
const nota = require('./routes/nota');
const tag = require('./routes/tag');
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/tag', tag);

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
});