const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
// juegos
app.get('/api/juegos/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_juegos";

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

// juegos GET BY ID
app.get('/api/juegos/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "select * from tbl_juegos where id_juego = ?";
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

// juegos POST
app.post('/api/juegos/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "insert into tbl_juegos " +
            " (nombre_juego, desarrollador_juego, distribuirdor_juego, genero_juego, suscripcion) " +
            " values (?, ?, ?, ?, ?)";
    
    let parametros = [  req.body.nombre_juego, 
                        req.body.desarrollador_juego, 
                        req.body.distribuirdor_juego,
                        req.body.genero_juego,
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

// juegos
app.put('/api/juegos/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = " update tbl_juegos set nombre_juego = ?, " +
                " desarrollador_juego = ?,  "+
                " distribuirdor_juego = ?, "+
                " genero_juego =?,"+
                " suscripcion =?"+
                " where id_juego= ? ";

    let parametros = [  req.body.nombre_juego, 
                        req.body.desarrollador_juego, 
                        req.body.distribuirdor_juego,
                        req.body.genero_juego,                    
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


//juegos DELETE
app.delete('/api/juegos/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "examen1"
    });

    let sql = "delete from tbl_juegos where id_juego = ?";

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

