// Crea una aplicación que nos convierta una cantidad de euros introducida 
// por prompt a otra moneda, estas pueden ser a dólares, yenes o libras. 
// El método tendrá como parámetros, la cantidad de euros y la moneda 
// a pasar que será una cadena, este no devolverá ningún valor, mostrará 
// un mensaje indicando el cambio. El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €


const calculaMoneda = (numero, moneda) => {
    let cambio = 0;

    switch (moneda) {
        case "libras":
            cambio = parseFloat(numero * 0.86).toFixed(2);
            break;
        case "dolares":
            cambio = parseFloat(numero * 1.28611).toFixed(2);
            break;
        case "yenes":
            cambio = parseFloat(numero * 129.852).toFixed(2);
        default:
            break;
    }

    return cambio;
}

let numero = parseInt(prompt("Introduzca la cantidad de euros"));
let moneda = prompt("Escribe a que moneda quieres convertir (dolares, yenes o libras): ");

let resultado = calculaMoneda(numero, moneda);

alert("Son " + resultado + " " + moneda);


