const express = require('express');
const app = express();
const port = 3000;

app.get('/usuario/:id?', (req, res) => {
    if (req.params.id) {
        res.send('Retorna um usuário');
    }
    res.send('Retorna usuários');
});

app.post('/usuario/', (req, res) => {
    res.send('Inclui usuário');
});

app.put('/usuario', (req, res) => {
    res.send('Editar um usuário');
});

app.delete('/usuario', (req, res) => {
    res.send('Remover um usuário');
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})