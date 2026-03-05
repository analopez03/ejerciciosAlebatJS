/*Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido*/

/// La variable usuario la he cambiado de var a const ya que siempre va a tener el mismo contenido.
const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}

/*Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario*/
// Cambiada la variable user de const a let ya que se va a modificar su contenido posteriormente en el tercer código.
let user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const meses = 12; // Añadido para no dejar lo que se denomina números mágicos en el código.
  const annualSalary = user.salary * meses;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));

/*Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€*/
// Como la variable user ya ha sido declarada, he cambiado el valor de la variable en lugar de volver a declararla.
user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function verificarAyuda(user) {
  // Cambiado el nombre de la función a algo más descriptivo.
  const edad = 30; // Añadido para no dejar lo que se denomina números mágicos en el código.
  if (user.nationality != "España") {
    if (user.age == edad) {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(verificarAyuda(user));
