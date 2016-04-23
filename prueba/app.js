var http=require("http");
var modulo=require("./modulo");
var _suma=modulo.suma(5,6);

http.createServer(function (request,response){
	console.log("Servidor iniciado");
	response.write("Suma: "+ _suma);
	response.end();
}).listen(8888);
