//condicionales
let nombre=prompt("ingresa tu nombre");
let edad=prompt("ingresa tu edad");
alert("Tu nombre es " + nombre + "y tu edad es " + edad);
//condidional para saber la edad y poner un mensaje//
//que pasa si no ponen la edad (programacion defensiva)//
if (edad >= 18) {
    alert("Bienvenido al lado oscuro de la red");
} else {
    alert("tas muy chiquito, te jodes");
} 