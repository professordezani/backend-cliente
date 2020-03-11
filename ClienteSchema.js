const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false
    }
}, {
   // configurações do schema.
   timestamp: true 
});

module.exports = mongoose.model('clientes', ClienteSchema);