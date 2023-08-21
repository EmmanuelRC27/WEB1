//EJERCICIO 1
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.forEach(mes => console.log(mes));

var valores = [true, 5, false, "hola", "adios", 2];


// EJERCICIO 2
// Parte 1: Determinar cual de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];
if (texto1.length > texto2.length) {
  console.log(`El texto "${texto1}" es mayor que el texto "${texto2}"`);
} else if (texto2.length > texto1.length) {
  console.log(`El texto "${texto2}" es mayor que el texto "${texto1}"`);
} else {
  console.log(`Los textos "${texto1}" y "${texto2}" tienen la misma longitud`);
}

// Parte 2: Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un resultado true y otro resultado false
var booleano1 = valores[0];
var booleano2 = valores[2];
console.log(`El resultado de ${booleano1} && ${booleano2} es ${booleano1 && booleano2}`);
console.log(`El resultado de ${booleano1} || ${booleano2} es ${booleano1 || booleano2}`);

// Parte 3: Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];
console.log(`La suma de ${numero1} mas ${numero2} es ${numero1 + numero2}`);
console.log(`La resta de ${numero1} menos ${numero2} es ${numero1 - numero2}`);
console.log(`La multiplicación de ${numero1} por ${numero2} es ${numero1 * numero2}`);
console.log(`La división de ${numero1} entre ${numero2} es ${numero1 / numero2}`);
console.log(`El residuo de ${numero1} entre ${numero2} es ${numero1 % numero2}`);

//EJERCICIO 3
var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
  console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//EJERCICIO 4
function factorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }
    console.log(`El factorial de ${n} es ${resultado}`);
  }
  factorial(5); // Imprime "El factorial de 5 es 120"

  //EJERCICIO 5
  function esParOImpar(n) {
    if (n % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  function mostrarResultadoNumero() {
    var n = parseInt(document.getElementById("numero").value);
    var resultado = esParOImpar(n);
    document.getElementById("resultado numero").textContent = resultado;
  }

  //EJERCICIO 6
  function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada sólo por mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada sólo por minúsculas";
    } else {
      return "La cadena está formada por una mezcla de mayúsculas y minúsculas";
    }
  }
  function mostrarResultadoPalabra() {
    var cadena = document.getElementById("cadena").value;
    var resultado = analizarCadena(cadena);
    document.getElementById("resultado palabra").textContent = resultado;
  }