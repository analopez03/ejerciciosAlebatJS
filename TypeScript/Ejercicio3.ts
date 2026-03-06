/*Ejercicio 3, Creando más tipos
Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep */

interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
  color: string;
}

interface Bird extends Animal {}

interface Dog extends Animal {
  race: DogRace;
  age: number;
}

type DogRace = "Husky" | "Labrador" | "Chucho";
type CatColor = Pick<Animal, "name" | "color" | "canSleep">;
type SnakeAbilities = Pick<Animal, "canEat" | "canDrink" | "canSleep">;

const bird: Bird = {
  name: "Loro",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
  color: "Verde",
};

const dog: Dog = {
  name: "Bulldog",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Chucho",
  age: 3,
  color: "Marrón",
};

const cat: CatColor = {
  name: "Gato",
  color: "Gris",
  canSleep: true,
};

const snake: SnakeAbilities = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
