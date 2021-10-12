// Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.


let numero = prompt('How many numbers you would like to put in?');
let valor_num = (numero);
let resultado = "";


for (let i = 1; i <= valor_num; i++) {

    let valor = prompt('Give me ' + i + 'º number:');
    resultado = resultado + (valor);
}

alert('El total es '+ resultado);