// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = parseInt(prompt("ingrese un numero"));
let aux = 0;

while (confirm("presione cancelar para salir o aceptar para sumar un numero")) {
  do {
    aux = parseInt(prompt("ingrese un numero"));
    if (isNaN(aux) === false) {
      numero += aux;
    } else {
      alert("no es un numero");
    }
  } while (isNaN(aux) === true);
}

document.write("Resultado de la suma: <br>" + numero);
