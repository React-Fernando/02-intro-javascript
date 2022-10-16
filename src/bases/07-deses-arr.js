const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
console.log(p1);

const [, p2] = personajes;
console.log(p2);

const [, ,p3] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}

const arr1 = retornaArreglo();
console.log(arr1);

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);


// Tarea
// 1.-el primer valor del arr se llamará nombre
// 2.-el segundo valor se llamará setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

// const arr = useState('Goku');
const [nombre, setNombre] = useState('Goku');
// console.log(arr);
//arr[1]();
console.log(nombre);
setNombre();