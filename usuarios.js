const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

// usuario
app.get('/api/usuario/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_usuario";

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
// usuario GET BY ID
app.get('/api/usuario/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_usuario where id_usuario = ?";
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

// usuario POST
app.post('/api/usuario/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "insert into tbl_usuario " +
            " (nombre_usuario, suscripciones_usuario) " +
            " values (?, ?)";
    
    let parametros = [  req.body.nombre_usuario, 
                        req.body.suscripciones_usuario                     
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

// usuario PUT
app.put('/api/usuario/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = " update tbl_usuario set nombre_usuario = ?, " +
                " suscripciones_usuario =?"+
                " where id_usuario= ?";

    let parametros = [  req.body.nombre_usuario, 
                        req.body.suscripciones_usuario ,  
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

// usuario DELETE
app.delete('/api/usuario/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "delete from tbl_usuario where id_usuario = ?";

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
