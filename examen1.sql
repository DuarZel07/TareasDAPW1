create table tbl_series(
    id_serie int auto_increment primary key,
    nombre_serie varchar(50),
    director_serie varchar (50),
    distribuidor_serie varchar(50),
    Genero_serie varchar(50),
    temporadas_serie varchar(50),
    capitulos_serie varchar(50),
    duracion varchar(50),
	suscripcion varchar(50)
);
create table tbl_peliculas(
    id_peliculas int auto_increment primary key,
    nombre_pelicula varchar(50),
    director_pelicula varchar (50),
    productora_pelicula varchar(50),
    distribuidor_pelicula varchar(50),
    genero_pelicula varchar(50),
    duracion_pelicula varchar (50),
    suscripcion varchar(50)
);
create table tbl_juegos(
    id_juego int auto_increment primary key,
    nombre_juego varchar(50),
    desarrollador_juego varchar(50),
    distribuirdor_juego varchar(50),
    genero_juego varchar (50),
	suscripcion varchar(50)
);
create table tbl_suscripcion(
    id_suscripcion int auto_increment primary key,
    nombre_suscripcion varchar(50),
    precio_suscripcion varchar(50)
);

create table tbl_usuario(
    id_usuario int auto_increment primary key,
    nombre_usuario varchar(50),
    suscripciones_usuario varchar(50)
);

create table serie_suscripcion
(
	id_serie int primary key,
    id_suscripcion int,
	constraint foreign key fk_series (id_serie) references tbl_series(id_serie),
    constraint foreign key fk_suscripcion (id_suscripcion) references tbl_suscripcion(id_suscripcion)

);
create table pelicula_suscripcion
(
	id_peliculas int primary key,
    id_suscripcion int,    
	constraint foreign key fk_peliculas (id_peliculas) references tbl_peliculas(id_peliculas),
    constraint foreign key fk_suscripcionP (id_suscripcion) references tbl_suscripcion(id_suscripcion)
);

create table juego_suscripcion
(
	id_juego int primary key,
    id_suscripcion int,    
	constraint foreign key fk_juego (id_juego) references tbl_juegos(id_juego),
    constraint foreign key fk_suscripcionJ (id_suscripcion) references tbl_suscripcion(id_suscripcion)
);

create table usuario_suscripcion(
	id_usuario int primary key,
    id_suscripcion int,  
    constraint foreign key fk_usuario (id_usuario) references tbl_usuario(id_usuario),
    constraint foreign key fk_suscripcionU (id_suscripcion) references tbl_suscripcion(id_suscripcion)
);

select * from tbl_peliculas;
select * from tbl_series;
select * from tbl_juegos;
select * from tbl_usuario;
select * from serie_suscripcion;
select * from juego_suscripcion;
select * from pelicula_suscripcion;
select * from usuario_suscripcion;


