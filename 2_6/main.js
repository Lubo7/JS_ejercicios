// Crea una aplicación que nos cuente el número de cifras de un número entero 
// positivo (hay que controlarlo) pedido por prompt. Crea un método que realice 
// esta acción, pasando el número por parámetro devolverá el número de cifras.


const calculaCifras = (numero) => {
	const resultado = numero.toString().length;
	return resultado;

}

let numero = parseInt(prompt('Introduzca un numero'));
let resultado = calculaCifras(numero);

alert('El resultado es ' + resultado);