const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

// peliculas
app.get('/api/peliculas/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_peliculas";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
});

// peliculas GET BY ID
app.get('/api/peliculas/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_peliculas where id_peliculas = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

// peliculas POST
app.post('/api/peliculas/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "insert into tbl_peliculas " +
            " (nombre_pelicula, director_pelicula, productora_pelicula, distribuidor_pelicula, genero_pelicula, duracion_pelicula, suscripcion) " +
            " values (?, ?, ?, ?, ?, ?, ?)";
    
    let parametros = [  req.body.nombre_pelicula, 
                        req.body.director_pelicula, 
                        req.body.productora_pelicula,
                        req.body.distribuidor_pelicula,
                        req.body.genero_pelicula,
                        req.body.duracion_pelicula,                      
                        req.body.suscripcion                        
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

// peliculas PUT
app.put('/api/peliculas/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = " update tbl_peliculas set nombre_pelicula = ?, " +
                " director_pelicula = ?,  "+
                " productora_pelicula = ?, "+
                " distribuidor_pelicula =?,"+
                " genero_pelicula = ?,"+
                " duracion_pelicula =?,"+
                " suscripcion =?"+
                " where id_peliculas= ? ";

    let parametros = [  req.body.nombre_pelicula, 
                        req.body.director_pelicula, 
                        req.body.productora_pelicula,
                        req.body.distribuidor_pelicula,
                        req.body.genero_pelicula,
                        req.body.duracion_pelicula,                      
                        req.body.suscripcion, 
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//peliculas DELETE
app.delete('/api/peliculas/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "delete from tbl_peliculas where id_peliculas = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});


app.listen(3000);
