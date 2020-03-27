const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors(
  // Se estiver em produção coloca o endereço de onde pode ser acessado:
  //{ origin: meusite.com }
  // Se deixar vazio qualquer frontend pode acessar estes dados
));
app.use(express.json());

app.use(routes);

app.listen(3333);
