// Crea una aplicación que nos cuente el número de cifras de un número entero 
// positivo (hay que controlarlo) pedido por prompt. Crea un método que realice 
// esta acción, pasando el número por parámetro devolverá el número de cifras.

let numero = prompt("Indica el numero que quieres calcular");
let resultado = "";

const cifras = (numero) => {
	if(numero >=0 && !numero.includes("." || ",")) {
		resultado = numero.toString().length;
		return "El numero " + numero + " contiene " + resultado + " cifras.";
	} else {
		return "El numero no es entero positivo";
	}
}

resultado = cifras(numero);
alert(resultado);

/*
const calculaCifras = (numero) => {
	const resultado = numero.toString().length;
	return resultado;

}

let numero = parseInt(prompt('Introduzca un numero'));
let resultado = calculaCifras(numero);

alert('El resultado es ' + resultado);*/