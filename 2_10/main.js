// Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indicar cual
// es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// primo, puedes hacer todos los métodos que necesites.

var tamaño = prompt("Introduce el tamaño del array");
tamaño = parseInt(tamaño);
var primo = true;
var array = [];
var num = 0;

//Proceso

const numRandom = () => {
    num = Math.floor(Math.random() * (100 - 3) + 3);
    return num;
}

const calculaPrimo = (valor) =>{
    primo = true;
    for (let a = 2; a < valor; a++) {
        if (valor%a == 0) {
            primo = false;
        }
    }
}

const añadirArray = () =>{
    while (array.length < tamaño) {
        calculaPrimo(numRandom());
        if (primo) {
            array.push(num);
        } 
    } 
    console.log(array);
    console.log(Math.max(...array));
}

//Output

añadirArray();
