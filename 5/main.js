/* Lee un número por teclado e indica si es divisible entre 2 (resto = 0). 
Si no lo es, también debemos indicarlo. */

let numero = 9;

if (numero % 2 === 0) {
    console.log("numero es divisible entre 2");
} else if (numero % 2 === 1) {
    console.log(numero + " no es divisible entre 2");
}


