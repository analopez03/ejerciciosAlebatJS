/*Ejercicio 5, maps
Sigue los siguientes pasos:

Crea un mapa llamado myMap
Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map
Limpia el mapa por completo*/

const myMap = new Map();

myMap.set("moroso", { name: "Ana" });
myMap.set("agarrado", { name: "Luis" });
myMap.set("generoso", { name: "Maria" });
myMap.set("funcion", function findAnimal() {
  return "Animal encontrado";
});
myMap.set("color", "color");

console.log(myMap);

console.log(myMap.get("moroso"));
console.log(myMap.has("hola"));
console.log(myMap.size);

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

myMap.delete("agarrado");
myMap.clear();
