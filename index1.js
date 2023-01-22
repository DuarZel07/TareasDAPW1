var http = require('http');
var url = require('url');
// Daniel Hernan Duarte Zelaya T32211252
// Este es el inciso #1 en donde damos la bienvenida al nombre del usuario por medio del parametro
// Con esta linea creamos nuestro servidor en el cual le damos dos parametros
http.createServer(function(req, res){
    var n = url.parse(req.url, true); // Esta linea creamos la variable que parsea el parametro de la URL
    var name = n.query; // Con esta linea hacemos que nuestra variable sea en query
    res.writeHead(200, {'Content-Type': 'text/html'}); // Aqui damos una conexion correcta de nuestro sevidor y que se lea en HTML    
    let usuario = " "; // aqui creamos una variable vacia a la cual le asignaremos valores mas adelante
    usuario = name.nombre; // La varialble almacena el valor de n y name en su totalidad con lo asignado anteriormente
    res.write ("Bienvenido" + " " + name.nombre + " " + "Has recibido el parametro correctamente");// Aqui damos el mensaje y concatenamos el valor que obtenga nombre
    res.end(); // Con esto cerramos el server 
}).listen(3000); // este es el puerto del servidor 