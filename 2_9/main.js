// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
// método para rellenar el array(que tenga como parámetros los números entre los que
// tenga que generar) y otro para mostrar el contenido y la suma del array.

let cant = prompt("Introduzca el cantidad de numeros en array");
let arr = [];
let sum = 0;
const rand = (min, max) => {
    return Math.random() * (max - min) + min;
};

const calc = () => {
    for (let i = 0; i < cant; i++){
        arr[i] = parseInt(rand(0,9));
        sum += arr[i];
        console.log("Numero de array en posicion " + i + " es: " + arr[i]);
    }
};

console.log(arr);
console.log("Suma del array : " + sum);