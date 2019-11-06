const mongoose = require('../../database/db');
var Endereco = require('./Endereco').schema;

const DeliveriesSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    peso: {
        type: String,
    },
    endereco: [Endereco],
    },
);

const Deliveries = mongoose.model('Deliveries', DeliveriesSchema);

module.exports = Deliveries;