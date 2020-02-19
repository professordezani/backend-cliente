// adicionar a biblioteca express:
const express = require('express');

// base de dados volátil e estática:
var clientes = [
    {
        id: 1,
        nome: 'Fulano',
        email: 'fulano@email.com'
    },
    {
        id: 2,
        nome: 'Ciclano'
    }
];

const server = express();

server.get('/cliente', function(request, response) { 
    return response.json(clientes);
});

server.listen(3000);