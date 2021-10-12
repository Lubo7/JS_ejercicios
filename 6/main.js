/* Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que 
sera del 21% */

let numero = window.prompt('Valor de producto');
let precioTotal = parseFloat(numero) + parseFloat(numero) * 0.21;

console.log("El precio total es " + precioTotal);

let valor1 = parseFloat(prompt("Introduce el precio")); 
console.log(valor1 * 1.21);


