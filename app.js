const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./routes/usuario');
const checklist = require('./routes/checklist');
const nota = require('./routes/nota');
const tag = require('./routes/tag');
const login = require('./routes/login');
const auth = require('./middlewares/auth');
const fs = require('fs');
const https = require('https');
const portHttps = 4443;

app.use(bodyParser.json());

	
app.use('/login', login);
app.use(auth);
app.use('/usuario', usuario);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/tag', tag);

const key = fs.readFileSync('certs/localhost-key.pem');
const cert = fs.readFileSync('certs/localhost.pem');

const credentials = {key, cert};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(portHttps, () => {
    console.log(`API rodando seguramente na porta ${portHttps}`);
});
