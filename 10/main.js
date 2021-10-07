// Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite 
//y lo que no.

let numero = window.prompt("Cuantos productos vendidos?");
let precio = parseFloat(numero);
let total = 0;

for (let i = 1; i <= precio; i++) {
    let suma = window.prompt("Precio del " + i + ". producto: ");
    total = total + parseFloat(suma);
}

console.log("El total es " + total);

