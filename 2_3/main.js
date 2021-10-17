// Crea una aplicación que nos pida un número por prompt y con un método se 
// lo pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false. Un número primo es aquel solo puede 
// dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es 
// divisible entre 5, sin embargo, 17 si es primo.
// definicion del primo: Divisible solo por su mismo y del 1. 
//0 y 1 no son primos

let numero = prompt("Introduce el numero para descubrir si es primo o no");
let i;

if (numero == 0 || numero == 1 || numero == 4) {
      alert("El numero no es primo");
} for (i = 2; i < numero / 2; i++) {
        if(numero % i == 0) {
            alert("El numero no es primo");
        }
        else (alert("El numero es primo")
    )
}