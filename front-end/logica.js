/// Series
function Datos_series(){
    var Tabla = " <thead> "+
                        "<tr> " + 
                        "<th> Nombre Serie </th> "+
                        "<th> Director Serie </th> "+
                        "<th> Distribuidor Serie </th> "+
                        "<th> Genero Serie </th> "+
                        "<th> Temporadas Serie </th> "+
                        "<th> Capitulos Serie </th> "+
                        "<th> Duracion </th> "+
                        "<th> Suscripcion Serie </th> "+
                        "</tr> "
                        +" </thead> <tbody>";
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dduarte/api/series",
        success: function(data){
            for (var i = 0; i < data.length ; i++ ){

                Tabla += " <tr> " +
                                "<td>" + data[i].id_serie + "</td>" +
                                "<td>" + data[i].nombre_serie+ "</td>"+
                                "<td>" + data[i].director_serie+ "</td>"+
                                "<td>" + data[i].distribuidor_serie+ "</td>"+
                                "<td>" + data[i].Genero_serie+ "</td>"+
                                "<td>" + data[i].temporadas_serie+ "</td>"+
                                "<td>" + data[i].capitulos_serie+ "</td>"+
                                "<td>" + data[i].duracion+ "</td>"+
                                "<td>" + data[i].suscripcion+ "</td>"+
                                "</tr>";
            }
            Tabla += " </tbody>";
            $("#reporteserie").html(Tabla);
        },
        dataType: "json"
      });
}
function enviarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_serie : $("#nombre_serie").val(),
        director_serie : $("#director_serie").val(),
        distribuidor_serie : $("#distribuidor_serie").val(),
        Genero_serie : $("#Genero_serie").val(),
        temporadas_serie : $("#temporadas_serie").val(),
        capitulos_serie : $("#capitulos_serie").val(),
        duracion : $("#duracion").val(),
        suscripcion : $("#suscripcion").val()

    };

    console.log(datosForm);

    var mensaje = "Serie Agregada";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dduarte/api/series",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Serie "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      Datos_series();
}

//Peliculas
////////////////////////////////////////////////////
function Datos_Peliculas(){
    var Tabla = " <thead> "+
                        "<tr> " + 
                        "<th> Nombre Pelicula </th> "+
                        "<th> Director pelicula </th> "+
                        "<th> Prouctora Pelicula </th> "+
                        "<th> Distribuidor Pelicula </th> "+
                        "<th> Genero Pelicula</th> "+
                        "<th> Duracion Pelicula </th> "+
                        "<th> Suscripcion Pelicula </th> "+
                        "</tr> "
                        +" </thead> <tbody>";
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dduarte/api/peliculas",
        success: function(data){
            for (var i = 0; i < data.length ; i++ ){
                Tabla += " <tr> " +
                                "<td>" + data[i].id_peliculas + "</td>" +
                                "<td>" + data[i].nombre_pelicula+ "</td>"+
                                "<td>" + data[i].director_pelicula+ "</td>"+
                                "<td>" + data[i].productora_pelicula+ "</td>"+
                                "<td>" + data[i].distribuidor_pelicula+ "</td>"+
                                "<td>" + data[i].genero_pelicula+ "</td>"+
                                "<td>" + data[i].duracion_pelicula+ "</td>"+
                                "<td>" + data[i].suscripcion+ "</td>"+
                                "</tr>";
            }
            Tabla += " </tbody>";
            $("#reportePelicula").html(Tabla);
        },
        dataType: "json"
      });
}
function enviarDatosPelicula(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_peliculas : $("#id_peliculas").val(),
        nombre_pelicula : $("#nombre_pelicula").val(),
        director_pelicula : $("#director_pelicula").val(),
        productora_pelicula : $("#productora_pelicula").val(),
        distribuidor_pelicula : $("#distribuidor_pelicula").val(),
        genero_pelicula : $("#genero_pelicula").val(),
        duracion_pelicula : $("#duracion_pelicula").val(),
        suscripcion : $("#suscripcion").val()

    };

    console.log(datosForm);

    var mensaje = "Pelicula Agregada";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dduarte/api/peliculas",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pelicula "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      Datos_Peliculas();
}

//Juegos
///////////////////////////////////////////////////
function Datos_Juego(){
    var Tabla = " <thead> "+
                        "<tr> " + 
                        "<th> Nombre Juegos </th> "+
                        "<th> Desarrollador Juegos </th> "+
                        "<th> Distribuidor Juegos </th> "+
                        "<th> Genero Juegos</th> "+
                        "<th> Suscripcion Juegos </th> "+
                        "</tr> "
                        +" </thead> <tbody>";
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dduarte/api/juegos",
        success: function(data){
            for (var i = 0; i < data.length ; i++ ){
                Tabla += " <tr> " +
                                "<td>" + data[i].id_juego + "</td>" +
                                "<td>" + data[i].nombre_juego+ "</td>"+
                                "<td>" + data[i].desarrollador_juego+ "</td>"+
                                "<td>" + data[i].distribuirdor_juego+ "</td>"+
                                "<td>" + data[i].genero_juego+ "</td>"+
                                "<td>" + data[i].suscripcion+ "</td>"+
                                "</tr>";
            }
            Tabla += " </tbody>";
            $("#reporteJuego").html(Tabla);
        },
        dataType: "json"
      });
}
function enviarDatosJuegos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_juego : $("#id_juego").val(),
        nombre_juego : $("#nombre_juego").val(),
        desarrollador_juego : $("#desarrollador_juego").val(),
        distribuirdor_juego : $("#distribuirdor_juego").val(),
        genero_juego : $("#genero_juego").val(),
        suscripcion : $("#suscripcion").val(),
    };

    console.log(datosForm);

    var mensaje = "Juego Agregado";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dduarte/api/juegos",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Juegos "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      Datos_Juego();
}

//Suscripciones
////////////////////////////////////////////////////////////
function Datos_Suscripcion(){ 
    var Tabla = " <thead> "+
                        "<tr> " + 
                        "<th> Nombre Suscripcion </th> "+
                        "<th> Pecio Suscripcion</th> "+
                        "</tr> "
                        +" </thead> <tbody>";
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dduarte/api/suscripcion",
        success: function(data){
            for (var i = 0; i < data.length ; i++ ){
                Tabla += " <tr> " +
                                "<td>" + data[i].id_suscripcion + "</td>" +
                                "<td>" + data[i].nombre_suscripcion+ "</td>"+
                                "<td>" + data[i].precio_suscripcion+ "</td>"+
                                "</tr>";
            }
            Tabla += " </tbody>";
            $("#reporteSuscripcion").html(Tabla);
        },
        dataType: "json"
      });
}
function enviarDatosSuscripcion(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_suscripcion : $("#id_suscripcion").val(),
        nombre_suscripcion : $("#nombre_suscripcion").val(),
        precio_suscripcion : $("#precio_suscripcion").val(),
    };

    console.log(datosForm);

    var mensaje = "Suscripcion Agregada";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dduarte/api/suscripcion",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Suscripcion "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      Datos_Suscripcion();
}

//Usuarios
/////////////////////////////////////////////////////////////
function Datos_Usuario(){ suscripcion
    var Tabla = " <thead> "+
                        "<tr> " + 
                        "<th> Nombre Usuario </th> "+
                        "<th> Suscripciones del usuario</th> "+
                        "</tr> "
                        +" </thead> <tbody>";
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dduarte/api/usuario",
        success: function(data){
            for (var i = 0; i < data.length ; i++ ){
                Tabla += " <tr> " +
                                "<td>" + data[i].id_usuario + "</td>" +
                                "<td>" + data[i].nombre_usuario+ "</td>"+
                                "<td>" + data[i].suscripciones_usuario+ "</td>"+
                                "</tr>";
            }
            Tabla += " </tbody>";
            $("#reporteUsuario").html(Tabla);
        },
        dataType: "json"
      });
}
function enviarDatosUsuario(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_usuario : $("#id_usuario").val(),
        nombre_usuario : $("#nombre_usuario").val(),
        suscripciones_usuario : $("#suscripciones_usuario").val(),
    };

    console.log(datosForm);

    var mensaje = "Usuario Agregado";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dduarte/api/usuario",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Usuario "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      Datos_Usuario();
}