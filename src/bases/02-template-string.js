const nombre = 'Fernando';
const apellido = 'Paz';

// Template string
// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// Backtick / Back Quote
const saludo = `Hola Mundo`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);