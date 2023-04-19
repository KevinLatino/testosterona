let Item = require("./juegoMongo"); //Requiere la clase
exports.Guardar = (req, res) => { //Exporta la siguiente funcion 
    //Crea y guarda una funcion
    Item.create({
        //Crea el Schema
        genero: req.body.genero,
        sinopsis: req.body.sinopsis,
        valoracion: req.body.valoracion,
        desarrollador: req.body.desarrollador,
        anio: req.body.anio,
        jugado: req.body.jugado,
        imagen: req.body.imagen,
        
    })
}

//elimina el item
exports.Eliminar = function (req, res) {
    Item.remove({ _id: req.body._id },
        function (err, item) {
            if (err) {
                res.send(err);
            }
            else {
                Item.find(function (err, item) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send(item);
                    }
                });
            }
        });
}

exports.findById = (req, res) => {
    Item.find({ _id: req.params.id }, (error, games) => {
        if (error) {
            res.send(error)
        } else {
            res.json(games[0])
        }
    })
}

//modificar
exports.modificar = function (req, res) {

    const query = {
        genero: req.body.genero,
        sinopsis: req.body.sinopsis,
        valoracion: req.body.valoracion,
        desarrollador: req.body.desarrollador,
        anio: req.body.anio,
        jugado: req.body.jugado,
    }

    if (req.body.imagen) {
        query.imagen = req.body.imagen
    }

    Item.update({ _id: req.body._id }, { $set: query }, function (err, item) { //Creamos un metodo
        if (err) {
            res.send(err) //Deteccion de errores
        }
        else {
            Item.find(function (err, item) { //Metodo find encuentra todo Schema creado 
                if (err) {
                    res.send(err) //Deteccion de errores
                } else {
                    res.json(item); //Crea los JSON
                }
            })
        }
    })

}

exports.findAll = async (_, res) => {
    const data = await Item.find();

    res.json(data);
};

exports.buy = (req, res) => {
    Item.update({
        _id: req.params.id
    },
    {
        $set: {
            comprado: true
        }
    }, (error) => {
        if (error) {
            res.send(error);
        } else {
            res.json({}); 
        }
    });
};


