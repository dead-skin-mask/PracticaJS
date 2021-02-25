//Ejercicio dias de la semana
//Creamos variable para crear el dia de la semana
let dia = prompt("Ingresa un dia de la semana");
//Convertir lo que escriba el usuario en minusculas 
dia = dia.toLowerCase ();
//validamos si es un dia de la semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "míercoles" || dia == "jueves" || dia == "viernes") {
    alert("Es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo") {
        alert("Es un fin de semana");    
    } else {
        alert("Ingrese un dia de la semana");
    }
}

/**
 * 1- que pasa si no escriben nada
 * 2- que pasa si usan mayusculas 
 * 3- si escribe otra cosa que no sea un dia
 * 4- tildes 
 */