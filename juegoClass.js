//clase Juego la cual será utilizada en el front-end de la página
class Juego {
    constructor(genero, sinopsis, valoracion, desarrollador, anio, jugado,imagen) {
        this.genero = genero;
        this.sinopsis = sinopsis;
        this.valoracion = valoracion; 
        this.desarrollador = desarrollador;
        this.anio = anio;
        this.jugado = jugado;
        this.imagen = imagen;
    }

//La clase posee distintos metodos, uno de es guardar 
    Guardar() {
        let objectSend = this;

        return new Promise((resolve, reject) => {

            try {
                let xhr = new XMLHttpRequest();
                xhr.open('PUT', '/api/juegoGuardar')
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                }
                xhr.send(JSON.stringify(objectSend));
            } catch (error) {
                reject(error.message);
            }
        });
    }

    //Metodo eliminar
    Eliminar() {
        var objetoAEnviar = this;
        return new Promise(function (resolve, reject) {

            try {
                var xhr = new XMLHttpRequest();
                xhr.open("DELETE", "/api/juegoEliminar");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        reject(xhr)
                    }
                };
                xhr.send(JSON.stringify(objetoAEnviar));
            }
            catch (error) {
                reject(error.message);
            }
        });

    }

    //metodo modificar
    modificar() {

        let objectSend = this;

        return new Promise((resolve, reject) => {

            try {
                let xhr = new XMLHttpRequest();
                xhr.open('POST','/api/modificar ')
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                }
                xhr.send(JSON.stringify(objectSend));
            } catch (error) {
                reject(error.message);
            }
        });
    }
}

