alert("ejemplo");
//variables: string number booleaan [] date
//tipo

//Diferencia entre el var y el let es el scope=ambito
//Cuando uso la variable var seria como definir una variable global dentro del archivo JS, el let seria local dentro de su ambrito
// var nombre = 'Pedro'; //De esta froma se definen las variables
// let apellido = 'Perez';

//ejemplo de como usaria el let, basicamente es una avriable que solo usaria en un lugar
//No es recomendable usar var, porque todo el tiempo va a estar gastando memoria a diferencia que el let es de un solo uso//
if (true) {
  var nombre = "Pedro";
  //let apellido='Perez';
}

alert(nombre);
// alert(apellido);

let bandera = true;
let edad = 25;
let precio = 3.35;

let lista = [];

let fecha = new Date().getDate();
alert(fecha);

//coercion
//si en la condicion uso dos iguales comparo el dato, si uso 3 iguales comparo el tipo de dato, si se usa un != la condicion es que el valor sea diferente
if (5 !== 6) {
  alert("siiiiiii");
} else if (5 < 3) {
} else {
  alert("noooo");
}
//Las constantes se definen siempre es mayuscula
//Aca por ejemplo estoy intentando editar una costante y eso en js no se puede hacer porque esta es un valor fijo
const PI = 3.14;
//PI = 322;

const Persona = {
  cedula: "11111",
  nombre: "pedro",
  apellido1: "perez",
  apellido2: "Rojas",
  edad: 15,
};

alert(Persona.cedula);
//para hacer este alert se una altgr mas la tecla de corchete cerrado y se le conoce como string template
alert(
  `el nombre de la persona es ${Persona.nombre} y tiene una edad de ${Persona.edad}`
);
alert(Persona);

//esto sirve para saber si el objeto tiene esta propiedad
let tiene = Persona.hasOwnProperty("edad");
alert(tiene);

//Si a una variable no le definimos un valor cuando le pidamos devolver algo lo hará como indefinido
let tienePerro = true;
alert(tienePerro);
// tienePerro = null;

if (tienePerro) {
  alert("tiene perro");
} else {
  alert("no tiene perro");
}

let listaColores = ["Rojo", "Verde", "Azul"];
alert(listaColores[1]);
alert(listaColores.length);

for (let i = 0; i < listaColores.length; i++) {
  console.log(listaColores[i]);
}

console.log("\nforeach");
listaColores.forEach((valor, index) => {
  if (index % 2 == 0) {
    console.log(`El valor es: ${valor} y el indice es ${index}`);
  }
});

console.log("\nMap");
listaColores.map((valor, index) => {
  console.log(`Color ${index + 1}: ${valor} `);
});

const listaPersonas = [
  {
    id: "66666",
    nombre: "Daniel",
    apellido: "Obando",
    edad: 50,
  },
  {
    id: "5555",
    nombre: "Pepe",
    apellido: "Perez",
    edad: 23,
  },
];

console.log("\nMap con array");
const listaResults = listaPersonas
  .map((persona, index) => {
    let datos = `Datos: ${persona.nombre} ${persona.apellido} ${persona.id}`;
    return {
      id: index,
      nombre: persona.nombre,
      edad: persona.edad,
    };
  })
  .filter((x) => x.edad > 18);

console.log(...listaResults);

// function saludar2() {
//   alert(prueba);
// }

// function saludar() {
//   var prueba = 5;
// }

// saludar2();
// saludar();
