//¿Qué salida tendrán los siguientes console.log?

// Comparaciones con booleanos
console.log(false + false); // Aparece 0 porque false se convierte a 0 es decir seria como 0 + 0
console.log(false + true); // Aparece 1 porque true se convierte a 1 es decir seria como 0 + 1
console.log(true + true); // Aparece 2 porque true se convierte a 1 es decir seria como 1 + 1

// Comparaciones con arrays
console.log([] === []); // Aparece false porque aunque ambos son arrays vacíos.
console.log([] + []); // Aparece una cadena vacía porque el operador + convierte los arrays a cadenas de texto, y dos arrays vacíos se convierten en una cadena vacía.
console.log([1, 2] + [3, 4]); // Aparece "1,23,4" porque el operador + convierte arrays en cadenas de texto y a la vez los concatena.
console.log([1] + 1); // Aparece "11" porque el operador + convierte el array [1] a la cadena "1" y luego concatena con el número 1.
console.log([1] - 1); // Aparece 0 porque el operador - convierte un array a numero, y los suma.

// Comparaciones con objetos
console.log({} + {}); // Aparece "[object Object][object Object]" porque el operador + convierte los objetos a cadenas de texto, y dos objetos vacíos se convierten en la cadena "[object Object]", y luego concatena ambas cadenas.
console.log({} === {}); // Aparece false porque aunque ambos son objetos vacíos, son dos objetos distintos.
console.log([] === {}); // Aparece false porque aunque ambos son objetos, uno es un array y el otro es un objeto literal, por lo que no son iguales.

// Comparaciones especiales
console.log(null + 1); // Aparece 1 porque null se convierte a 0 es decir seria como 0 + 1.
console.log(undefined + 1); // Undefined no se puede convertir a numero por tanto sale NaN.
console.log(null == 0); // Sale false porque null solo es igual a undefined y no a ningún otro valor.
console.log(null <= 0); // Sale true porque null se convierte a 0 y 0 es igual a 0 o menor que 0.
console.log(undefined == null); // Sale true porque undefined y null son iguales.

// Operaciones con NaN
console.log(NaN + 1); // Aparece NaN porque cualquier operación con NaN da como resultado NaN.
console.log(NaN == NaN); // Aparece false porque NaN no es igual a nada, ni siquiera a sí mismo.
console.log(NaN === NaN); // Aparece false porque NaN no es igual a nada tampoco estrictamente.
