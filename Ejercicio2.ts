/* Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho */

interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Bird extends Animal {}

interface Dog extends Animal {
  race: DogRace;
  age: number;
}

type DogRace = "Husky" | "Labrador" | "Chucho";

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
  race: "Chucho",
  age: 3,
};
