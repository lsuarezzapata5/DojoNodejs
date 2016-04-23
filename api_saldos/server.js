console.log('Inició el mini api');
var express= require('express');
var app=express();
var PUERTO=4777;

app.listen(PUERTO, function(){
	console.log('Puerto: '+PUERTO+ 'abierto');
});

app.get('/', function(req,res){
	res.send('Bienvenido al mini api de saldos');
});
var bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.post('/postPrueba', function(req,res){
	console.log(req.body);
	res.send('Ok :)');
});
var pg=require('pg');
var URL= 'postgres://rsqdgjil:fd9avb8eJFV5RpNpahBwgNs4e1a8Loz-@pellefant.db.elephantsql.com:5432/rsqdgjil';

var client=new pg.Client(URL);
client.connect(function(err){
	if(err){
		return console.log('Error en la conexion a la BD');
	}
	console.log('Conexion Realizada con exito');
	client.end();
});

app.post('/api/insertar', function(req, res){
    var cedula = req.body.cedula;
    var nombre = req.body.nombre;
    var dinero = req.body.dinero;
    
    var queryInsertar = 'INSERT INTO saldos VALUES('
                + cedula + ', '
                + '\'' + nombre + '\', '
                + dinero + ');'
    console.log(queryInsertar);
    
    pg.connect(URL, function(err, client, done){
        if (err){
            res.send('Error :(');
            return console.log('Error de conexión');
        }
        client.query(queryInsertar, function(err, result){
            if(err){
                res.send('Error :(');
                client.end();
                return console.log('Error en el query');
            }
            console.log('Se insertó');
            res.send('OK c:');
            client.end();
        });
    });
});