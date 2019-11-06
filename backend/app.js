const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//importa as rotas de autenticacao e do projeto
require('./app/controllers/index')(app);

console.log("Rodando porta 3000 \n")
app.listen(3000);
