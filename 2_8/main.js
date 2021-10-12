// Crea un array de 10 posiciones de números con valores pedidos por prompt. 
//Muestra por consola el índice y el valor al que corresponde. Haz dos métodos, 
//uno para rellenar valores y otro para mostrar.

let i = "";
let valor = prompt("Give me " + i+1 + "º number:");
let valor_num = 11;
let resultado = "";


for (let i = 2; i < valor_num; i++) {

    let valor = prompt('Give me ' + i + 'º number:');
    resultado = resultado + (valor);
}

console.log(resultado);