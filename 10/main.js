// Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite 
//y lo que no.

let numero = prompt('Número de productos vendidos:');
let valor_num = parseFloat(numero);
let total = 0;

for (let i = 1; i <= valor_num; i++) {

    let valor = prompt('Precio del ' + i + 'º producto:');
    total = total + parseFloat(valor);
}

alert('El total es '+ total);
