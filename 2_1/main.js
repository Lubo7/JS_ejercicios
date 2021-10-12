// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
// Pediremos al usuario que figura queremos calcular su área y según 
// lo introducido pedirá los valores necesarios para calcular el área. 
// Para ello has de crear un método por cada figura para calcular cada área, 
// este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado


const PI = 3.141592653589;

function circulo(circulo) {
    let R = prompt("Introduce radio value to count a circle area")
    alert("The circle area is " + Number(R**2 *PI));
}

function cuadrado(cuadrado) {
    let lado = prompt("Introduce 'lado' value")
    alert("The square area is " + Number(lado * lado));
}

function triangulo(triangulo) {
    let base = prompt("Introduce base value");
    let altura = prompt("Introduce altura value")
    alert("The triangle area is " + Number(base * altura) / 2);
}




