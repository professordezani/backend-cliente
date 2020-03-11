// adicionar a biblioteca express:
const express = require('express');
const mongoose = require('mongoose');
const Clientes = require('./ClienteSchema');

const MONGO_URL = "mongodb+srv://usuario:senha@cluster0-yxf23.mongodb.net/dbcliente?retryWrites=true&w=majority"

// conectar com o banco de dados MongoDB
mongoose.connect(MONGO_URL);

const server = express();

// os dados serão recebidos no formato json:
server.use(express.json());

server.get('/cliente', async function(request, response) { 
    const clientes = await Clientes.find(); // SELECT * FROM Clientes
    return response.json(clientes);
});

server.get('/cliente/:id', async function(request, response) { 
    const id = request.params.id;
    //const cliente = clientes.filter(c => c.id == id);
    const cliente = await Clientes.findById(id);
    return response.json(cliente);
});

server.post('/cliente', async function(request, response) {
    const cliente = request.body;
    //clientes.push(cliente);
    await Clientes.create(cliente); // INSERT INTO Cliente VALUES (...)
    return response.status(201).send();
})

server.put('/cliente/:id', async function(request, response) {
    const id = request.params.id;
    const cliente = request.body;

    await Clientes.findByIdAndUpdate(id, cliente);
    return response.status(200).send();
    

    // clientes.forEach(cli => {
    //     if(cli.id == id) {
    //         cli.nome = cliente.nome;
    //         cli.email = cliente.email;
            
    //         return;
    //     }
    // });
    
})

server.delete('/cliente/:id', async function(request, response) { 
    const id = request.params.id;
    await Clientes.findByIdAndRemove(id);
    return response.status(200).send();
});

server.listen(process.env.PORT || 3000);