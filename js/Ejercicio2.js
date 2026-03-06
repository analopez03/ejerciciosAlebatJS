//Ejercicio 2, Hoisting
//Que devuelve por consola cada uno de los siguientes console.log

console.log(a);
var a = "hola";
// En este caso te sale undefined, porque la variable está declarada pero no definida.
//-------
console.log(b);
let b = "hola";
// En este caso sale un error de referencia porque llamas a la variable antes de declararla.
//----
console.log(c);
const c = "hola";
// En este caso sale un error de referencia porque llamas a la variable antes de declararla igual que con el let.
//------
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}

// En este caso te sale "Hola desde sayHi!" porque las funciones declaradas se elevan al inicio, es decir, es como si las hubieses declarado antes de llamarlas.

//----
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

// Sale igualmente "Adios desde sayBye!" por la misma razon que en la anterior, se eleva al inicio .
