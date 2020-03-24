const express = require('express');

const app = express();

// Rota raiz se eu quisesse outra rota ex: app.get('/contato);

/*app.get('/',(request,response) =>{
  return response.send('Hello World!');
});*/
// quando abro o app ele faz um get, no endereço / utilizando uma arrow function 
//que retorna um js object notation

app.get('/', (request,response) => {
  return response.json({
    evento: 'Semana OmniStack 11',
    aluno: 'Gabriel Lavoura',
  });
});

app.listen(3333);
