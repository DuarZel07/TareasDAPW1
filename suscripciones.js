const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

// suscripcion
app.get('/api/suscripcion/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_suscripcion";

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

// suscripcion GET BY ID
app.get('/api/suscripcion/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_suscripcion where id_suscripcion = ?";
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

// suscripcion POST
app.post('/api/suscripcion/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "insert into tbl_suscripcion " +
            " (nombre_suscripcion, precio_suscripcion) " +
            " values (?, ?)";
    
    let parametros = [  req.body.nombre_suscripcion, 
                        req.body.precio_suscripcion                     
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

// suscripcion PUT
app.put('/api/suscripcion/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = " update tbl_suscripcion set nombre_suscripcion = ?, " +
                " precio_suscripcion =?"+
                " where id_suscripcion= ? ";

    let parametros = [   req.body.nombre_suscripcion, 
                         req.body.precio_suscripcion, 
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

//suscripcion DELETE
app.delete('/api/suscripcion/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "delete from tbl_suscripcion where id_suscripcion = ?";

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
