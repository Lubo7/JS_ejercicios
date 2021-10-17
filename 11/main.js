// Crea una aplicación que nos pida un día de la semana y que nos diga si es 
// un día laboral o no. Usa un switch para ello.

let dia = " ";

dia = prompt("Que dia es?");

switch(dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves": 
    case "viernes": 
        alert(dia + " es el dia laboral.");
        break;
    case "sabado":
    case "domingo":
        alert(dia + " es el dia libre.");
        break;
    default:
        alert("Para saber si es el dia libre o laboral, vuelve y escribe el dia en espanol.");
        break;
}