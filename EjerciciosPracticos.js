/*Para ver como funciona cada ejercicio solo descomentalo y comenta lo que no quieras ocupar

    EJERCICIOS WHILE
Intenta practicar el uso de este ciclo con los siguientes ejercicios:
    + Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
    + Modifica el ciclo para que imprima solo los números pares.*/

//EJERCICIO 1
//console.log("Impresiones con while");
//let i = 10;

/*while (i > 0) {
    console.log(i);
    i --;
} */

//EJERCICIO 2
/* while (i > 0) {
    if (i%2 === 0) {
        console.log(i);
    }
    i --;
}  */

/*      EJERCICIOS FOR
    + Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
    + Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado. */

console.log("Impresiones con for");
/* for (let i = 10; i > 0; i--) {
    console.log(i);
} */

for (let i = 1; i < 21; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}