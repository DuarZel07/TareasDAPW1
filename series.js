const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

// Series GET
app.get('/api/series/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_series";

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

// Series GET BY ID
app.get('/api/series/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_series where id_serie = ?";
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
// Series POST
app.post('/api/series/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "insert into tbl_series " +
            " (nombre_serie, director_serie, distribuidor_serie, Genero_serie, temporadas_serie, capitulos_serie, duracion, suscripcion) " +
            " values (?, ?, ?, ?, ?, ?, ?, ?)";
    
    let parametros = [  req.body.nombre_serie, 
                        req.body.director_serie, 
                        req.body.distribuidor_serie,
                        req.body.Genero_serie,
                        req.body.temporadas_serie,
                        req.body.capitulos_serie,                      
                        req.body.duracion,
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

// series 
app.put('/api/series/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = " update tbl_series set nombre_serie = ?, " +
                " director_serie = ?,  "+
                " distribuidor_serie = ?, "+
                " Genero_serie =?,"+
                " temporadas_serie =?,"+
                " capitulos_serie =?,"+
                " duracion =?,"+
                " suscripcion =?"+
                " where id_serie= ? ";

    let parametros = [  req.body.nombre_serie, 
                        req.body.director_serie, 
                        req.body.distribuidor_serie,
                        req.body.Genero_serie,  
                        req.body.temporadas_serie,                    
                        req.body.capitulos_serie, 
                        req.body.duracion,                    
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

//series DELETE
app.delete('/api/series/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "delete from tbl_series where id_serie = ?";

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
