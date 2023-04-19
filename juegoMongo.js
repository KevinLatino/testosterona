//llama a mongo
let mongoose = require('mongoose');

//Busca la propiedad esquema
let Schema = mongoose.Schema;

let juegoMongo = new Schema({
    //clase para mongo (Schema) de la clase Carro en carClass.js
    genero: String,
    sinopsis: String,
    valoracion: String,
    desarrollador: String,
    anio: Number,
    jugado: String,
    imagen: String
});
module.exports = mongoose.model("JUEGOMONGO", juegoMongo);