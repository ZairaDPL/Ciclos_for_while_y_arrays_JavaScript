/*Para ver como funciona cada ejercicio solo descomentalo y comenta lo que no quieras ocupar*/

// EJEMPLO CICLO while
/* let index = 1;

while(index <= 10){
    console.log('iteracion', index);
    index ++;
} */

//EJEMPLO CICLO for
/* for(let index = 1; index <= 10; index++){
    console.log('iteracion', index);
}  */

//EJEMPLO ARRAY: creación de un array de numeros
// const emojis = [10, 18, 20, 9, 5];

//EJEMPLO: recorrer los elementos del array creado con un ciclo for
/* for (let index = 0; index < emojis.length; index++) {
    console.log('Iteración', index );
    console.log(emojis[index]);
} */

/* EJERCICIO: Buscarun auto por su marca o color dentro de un array que contiene
varios objetos auto con atributos de marca, modelo y colo */
/* let BuscarMarca = prompt('Igresa la marca que quieres buscar');
let BuscarColor = prompt('Ingresa el color de auto que quieres buscar');

//Array de autos
const autos =[
        //objetos de autos
    {marca: 'Toyota', modelo: 'Corolla', color: 'azul'},
    {marca: 'Honda', modelo: 'Civic', color: 'rojo'},
    {marca: 'Subaru', modelo: 'WRX', color: 'gris'},
    {marca: 'BMW', modelo: 'M4', color: 'azul'},
    {marca: 'Ford', modelo: 'Mustang', color: 'rojo'},
    {marca: 'Tesla', modelo: 'Model 3', color: 'gris'},
    {marca: 'Chevrolet', modelo: 'Silverado', color: 'blanco'}
];

//Filtrar busqueda de autos por marca
let autoBuscado = null;

for (let index = 0; index < autos.length; index++) {
    if(autos[index].marca === usuarioBuscarM){
        autoBuscado = autos[index];
        break;
    }    
}

if (autoBuscado) 
    console.log('Auto encontrado:', autoBuscado);
else 
    console.log('No se enconto la marca');

//Filtrar busqueda de autos por color
const autosColor = [];

for (let index = 0; index < autos.length; index++) {
    if(autos[index].color === usuarioBuscarC)
        autosColor.push(autos[index]);
}

console.log('Lista de autos de color:', autosColor); */

/*EJERCICIO
FizzBuzz es un ejercicio clásico en programación que ayuda
a mejorar el pensamiento lógico y la estructura de los bucles
condicionales. Tu tarea es escribir un programa en JavaScript 
que recorra los números de 1 al 100 y siga estas reglas:
    Si un número es múlputiplo de 3, imprime "Fizz".
    Si un número es múlputiplo de 5, imprime "Buzz".
    Si un número es múlputiplo de 3 y de 5, imprime "FizzBuzz".
    Si un número no es múlputiplo de 3 ni de 5, simplemente imprime el número.
*/ 

for (let index = 1; index <= 100 ; index++){
    if ((index%3 === 0) && (index%5 === 0))
        console.log('FizzBuzz');
    else if (index%3 === 0)
        console.log('Fizz');
    else if (index%5 === 0)
        console.log('Buzz');
    else 
        console.log(index);
}