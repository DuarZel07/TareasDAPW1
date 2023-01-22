var http = require('http');
var url = require('url');
// Daniel Hernan Duarte Zelaya T32211252
// Este es el inciso #3 en donde damos recibimos un numero y mostramos el doble y triple del mismo
// Con esta linea creamos nuestro servidor en el cual le damos dos parametros
http.createServer(function(req, res){
    var s = url.parse(req.url, true); // Esta linea creamos la variable que parsea el parametro de la URL
    var numeros = s.query; // Con esta linea hacemos que nuestra variable sea en query
    res.writeHead(200, {'Content-Type': 'text/html'}); // Aqui damos una conexion correcta de nuestro sevidor y que se lea en HTML
    let result = " "; // aqui creamos una variable vacia a la cual le asignaremos valores mas adelante
    result = parseFloat(numeros.num1) * parseFloat(numeros.num2); // Aqui recibiremos los 2 numeros los cuales se multiplicaran y se convierten en float
    res.write(numeros.num1 + " * " +numeros.num2 + " = " + result);// Aqui se muestra el resultado de la multiplicacion de los numeros que se reciben como parametros
    res.write('<br>');// Este es un simple salto de linea
    result = parseFloat(numeros.num1) / parseFloat(numeros.num2); // Aqui recibiremos los 2 numeros los cuales se dividiran y se convierten en float
    res.write(numeros.num1 + " / "+ numeros.num2 + " = " + result);//  Aqui se muestra el resultado de la division de los numeros que se reciben como parametros
    res.end(); // Con esto cerramos el server
}).listen(8080); // este es el puerto del servidor 