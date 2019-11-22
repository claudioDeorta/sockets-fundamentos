var socket = io();
socket.on('connect', function() {

    console.log('Conecatado al servidor ');

});
//escucha 
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});

// Enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'Claudio',
    mensaje: 'Saludos a todos'
}, function(resp) {
    console.log('respuesta server : ', resp);
})

//Escuchar informacion

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor', mensaje);

});