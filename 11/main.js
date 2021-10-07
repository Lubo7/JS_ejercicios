// Crea una aplicación que nos pida un día de la semana y que nos diga si es 
// un día laboral o no. Usa un switch para ello.

let dia = " ";

dia = window.prompt("Que dia es?");

switch(dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves": 
    case "viernes": 
        console.log(dia + " es el dia laboral.");
        break;
    case "sabado":
    case "domingo":
        console.log(dia + " es el dia libre.");
        break;
    default:
        console.log("Para saber si es el dia libre o laboral, escribe el dia en espanol y en minisculas.")
        break;
}