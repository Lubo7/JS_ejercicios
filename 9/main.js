/* Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. 
Utiliza el bucle que desees. */


let i = 1;

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i);
    }
}