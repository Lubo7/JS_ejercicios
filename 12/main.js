// Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta 
// sale, aunque le queden intentos).

let contrasena = "DJ";
let valor = "";
let num_intentos = 0;

do {
    valor = prompt("Introduzca la contrasena");

    if (contrasena == valor) {
        alert("Enhorabuena, la party puede continuar!");
    }else if (contrasena != valor) {
        ++num_intentos;
        alert("Contrasena no es valida. Intenta poner primera letra del nombre de nuestros docentes.")
    }
} while (contrasena != valor && num_intentos<3);

if (contrasena !== valor) {
    alert("No hay mas intentos")
}
