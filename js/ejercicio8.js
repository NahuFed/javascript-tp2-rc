// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)

let numero = 0;

do {
  numero = parseInt(prompt("ingrese un numero del 1 al 50"));
  if (numero > 0 && numero <= 50) {
    for (let i = 1; i <= numero; i++) {
        for(let j = 1; j <=i; j++){
            document.write(j)
        }
        document.write('<br>')      
    }
  } else {
    alert("no es un numero valido");
  }
} while (isNaN(numero) === true || numero <= 0 || numero > 50);
