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

// console.log("Impresiones con for");
/* for (let i = 10; i > 0; i--) {
    console.log(i);
} */

/* for (let i = 1; i < 21; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
} */

/*      EJERCICIOS CON ARRAYS 
1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); // Imprime: verde

3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'

4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');

5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();

console.log(colores); // Muestra el array modificado
*/

let colores = ['lila', 'azul', 'rojo', 'blanco'];
console.log('Lista original:', colores);

console.log('Segundo color:', colores[1]);

colores[2] = 'rosa';
console.log('Lista modificada:', colores);

colores.push('naranja');
console.log('Lista con nuevos colores:', colores);

colores.shift();
console.log('Lista final:', colores);
