// Arreglos en JS

// const arreglo = new Array(100);
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// El push modifica el objeto principal, nosotros no lo vamos a usar

// operador Spread
let arreglo2 = [...arreglo, 5];

// Funcion que se ejecuta dentro del metodo
// Esta funcion se ejecuta por cada uno de los
// elementos del arreglo2
// munero: 1ro toma el valor 1, luego 2, 3 y 4
// si no tiene un return devuelve undefine
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);