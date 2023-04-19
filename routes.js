let controllerJuego = require('./controllerMongo')// requiere controllerMongo

// let loginController = require('./user_controller')
module.exports = (app) => {
    //cuado se haga un http://localhost:8989/inicio se mostrará el archivo juegos.html
    app.get('/peticiones', (req, res) => {
        res.sendfile('CarClass.js');
    });
    app.put('/api/juegoGuardar', controllerJuego.Guardar);
    app.delete('/api/juegoEliminar', controllerJuego.Eliminar);
    app.post('/api/modificar', controllerJuego.modificar);
    app.get("/api/games/:id", controllerJuego.findById);
    app.get("/api/games/", controllerJuego.findAll);
    

    
}
