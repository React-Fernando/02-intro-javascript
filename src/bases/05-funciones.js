// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }

// Si quiero transformarla a una funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
// Si tengo una sola linea en el return 
// esto es lo mismo que saludar2
// Mas facil de leer
const saludar3 = (nombre) => `Hola, ${nombre}`;
// Si no recibe ningun argumento
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// Retorna un objeto
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

// console.log(getUser());
const user = getUser();
console.log(user);

// 1.-Transformar a funcion de flecha
// 2.-Tiene que retornar un objeto implicito
// 3.-Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);