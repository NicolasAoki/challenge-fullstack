const mongoose = require('../../database/db');

const GeolocalizacaoSchema = new mongoose.Schema({
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    }
});

const Geolocalizacao = mongoose.model('Geolocalizacao', GeolocalizacaoSchema);

module.exports = Geolocalizacao;