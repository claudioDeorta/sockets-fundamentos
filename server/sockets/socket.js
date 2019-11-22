const { io } = require('../server')

io.on('connect', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });




    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente 

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALI BIEN '
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL !!!!!!!'
            });
        }

        callback();*/

    })



});