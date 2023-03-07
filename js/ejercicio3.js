// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadenas = prompt('ingrese una cadena de texto')

while(confirm("presione cancelar para salir o aceptar para continuar")){
    cadenas += '-' + prompt('ingrese una cadena de texto')     
}

document.write(cadenas)