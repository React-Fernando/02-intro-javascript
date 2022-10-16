// Desestructuracion
// Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Extrae las propiedades del objeto
const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = (usuario) => {
    const { edad, clave, nombre } = usuario;

    console.log(edad, clave, nombre);
}

retornaPersona(persona);

// puedo extraer directamente
const retornaPersona2 = ({nombre, edad}) => {
    console.log(nombre, edad);
}

retornaPersona2(persona);

// Puedo asignar valores por defecto
const retornaPersona3 = ({nombre, edad, rango = 'Capitán'}) => {
    console.log(nombre, edad, rango);
}

retornaPersona3(persona);

//
const useContext = ({nombre, edad, rango = 'Capitán', nombreClave, anios}) => {
    console.log(nombre, edad, rango, clave);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5543,
            lng: -34.9865
        },
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);