var nombre='Luisa ';
edad=20;

if(edad>18){
	alert('Es mayor de edad');
}else{
	alert('Es menor de edad');
}

num=prompt('Digite un numero de 1-4');


switch(num){
	case '1':
		console.log('1');
	break;
	case '2':
		console.log('2');
	break;
	default: 
		console.log('Nuemro no valido');
}

numFact=prompt('Digite un numero para el factorial');
var factorial= function(numero){
	factorial=1;
	for (numero ; numero > 0; numero--) {
		factorial*=numero;
	};
	return factorial;
}

alert(factorial(numFact));

/** Otra manera de crear una funcion
function factorial(numero){

} **/