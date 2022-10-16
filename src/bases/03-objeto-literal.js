// Objetos literales - Diccionarios
// Los objetos trabajan con pares de valores
// Se pueden añadir objetos
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55564321,
        lat: 14.094586,
        lng: 43.5453211,
    },
}

// Se uede escribir de dos formas cuando
// el nombre de la variable es el mismo
// console.log({
//     persona:persona
// });

console.log(persona);

// tambien se puede escribir en un console.table
// console.table(persona);

// Aqui estamos copiando la referencia del objeto
// persona a persona2
// Es una asignacion de referencia
// Esto asi no se hace, si quiero crear un clon
// lo mas facil es crear un nuevo objeto y poner
// todas las propiedades
const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

// Asi apunta a un espacio de memoria nuevo
const persona3 = {
    nombre: 'Javier',
    apellido: 'Espalto'
}

// pero a partir de ES6 se creo
const persona4 = {...persona}
// y vamos a tener un clon del objeto