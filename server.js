//llamamos a express una libreria npm 
let express = require('express');
//Llamamos a la funcion  express
let app = express();
//Llamamos a mongoose
let mongoose = require("mongoose");
//Asignamos un puerto
let port = process.env.PORT || 8989;

var cors = require('cors');

const mongoAtlasUri = 'mongodb+srv://prueba:prueba@cluster0.zsa7ygr.mongodb.net/?retryWrites=true&w=majority';
// try {
//     mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
//         console.log("connected"));
// }
// catch (error) {
//     console.log("could not connect");
// }
mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () =>
    console.log("connected"))
    .catch(() =>  console.log("could not connect"))
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


let bodyParser = require('body-parser');
let { json } = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
require('./routes.js')(app)


app.listen(port);
console.log(`App por el puerto ${port}`);