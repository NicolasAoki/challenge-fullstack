const mongoose = require('../../database/db');
var Geolocalizacao = require('./Geolocalizacao').schema;

const EnderecoSchema = new mongoose.Schema({
    logradouro: {
        type: String,
    },
    numero: {
        type: String,
    },
    bairro: {
        type: String,
    },
    complemento: {
        type: String,
    },
    cidade: {
        type: String,
    },
    estado: {
        type: String,
    },
    pais: {
        type: String,
    },
    geolocalizacao:[Geolocalizacao]
});

const Endereco = mongoose.model('Endereco', EnderecoSchema);

module.exports = Endereco;