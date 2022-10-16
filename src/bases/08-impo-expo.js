// import { heroes } from "./data/heroes";

// Para exportacion por defecto le puedo dar el nombre
// que yo quiera
import heroes, { owners } from "./data/heroes";

console.log(owners);



// const getHeroeById = (id) => {
//     return heroes.find((heroes) => {
//         if(heroes.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);
console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);
console.log(getHeroesByOwner('Marvel'));