// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

let int1  = prompt("Introduzca el número");
let int2 = prompt("Introduzca segundo numero");
let operador  = prompt("Introduzca + - * / ^ o %");
let resultado = 0;

switch (operador) {
    case "+":
        resultado = int1 + int2;
        break;
    case "-":
        resultado = int1 - int2;
        break;
    case "*":
        resultado = int1 * int2;
        break;
    case "/":
        resultado = int1 / int2;
        break;
}
alert(int1 + int2 + ' ' + operador + ' ' +  string);

