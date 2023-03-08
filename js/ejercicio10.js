// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en
// orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = 0;
let columnas = 0;

do {
  filas = parseInt(prompt("Ingrese el numero de filas"));
  columnas = parseInt(prompt("Ingrese el numero de columnas"));
  if(isNaN(filas)===false && isNaN(columnas)===false){
      let celda = filas * columnas;
      for (i = filas; i > 0; i--) {
        for (j = 1; j <= columnas; j++) {
          document.write(celda+' ');
          celda--;
        }
        document.write("<br>");
      }
  }else{
    alert('no es un numero valido')
  }
} while (isNaN(filas) === true || isNaN(columnas) === true);
