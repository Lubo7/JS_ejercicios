// Crea una aplicación que nos convierta un número en base decimal a binario. 
// Esto lo realizará un método al que le pasaremos el número como parámetro, 
// devolverá un String con el numero convertido a binario. Para convertir 
// un número decimal a binario, debemos dividir entre 2 el número y el resultado 
// de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, 
// el resto que obtengamos de cada división formara el número binario, 
// de abajo a arriba.


const calculaBinario = (numero) => {
    const resultado = numero.toString(2);
    return resultado;
}

let numero = parseInt(prompt("Introduzca un numero"), 10);
let resultado = calculaBinario(numero);

alert("El resultado es " + resultado);