/*Ejercicio 1:
typescript: types e intefaces
Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript.
Usa este Playground para hacerlo*/

interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Bird extends Animal {}

interface Dog extends Animal {
  race: string;
  age: number;
}

const bird: Bird = {
  name: "Loro",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Bulldog",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Bulldog",
  age: 3,
};

console.log(bird);
console.log(dog);
