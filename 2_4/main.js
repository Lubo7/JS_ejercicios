// Crea una aplicación que nos calcule el factorial de un número pedido por 
// prompt, lo realizara mediante un método al que le pasamos el número como 
// parámetro. Para calcular el factorial, se multiplica los números anteriores 
// hasta llegar a uno. Por ejemplo, si introducimos un 5, realizara esta 
// operación 5*4*3*2*1=120.

// Factorial 0 y 1 es 1

let n = prompt("Introduzca el numero");
resultado = factorial(n)

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
        return answer;
    }else{
        for(var i = n; i >= 1; i--){
        answer = answer * i;
    }
        return answer;
    } 
} 

alert("El factorial de " + n + " es " + resultado);
