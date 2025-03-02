/*EJERCICIOS WHILE
Intenta practicar el uso de este ciclo con los siguientes ejercicios:
    + Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
    + Modifica el ciclo para que imprima solo los números pares.*/

//EJERCICIO 1
let i = 10;

/*while (i > 0) {
    console.log(i);
    i --;
} */

//EJERCICIO 2
while (i > 0) {
    if (i%2 === 0) {
        console.log(i);
    }
    i --;
} 