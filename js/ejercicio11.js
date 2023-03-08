// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
// nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let edad1 = parseInt(prompt('Ingrese la edad de la primer persona'))
let edad2 = parseInt(prompt('Ingrese la edad de la segunda persona'))
let edad3 = parseInt(prompt('Ingrese la edad de la tercer persona'))
let nombre1 = prompt('Ingrese el nombre de la primera persona')
let nombre2 = prompt('Ingrese el nombre de la segunda persona')
let nombre3 = prompt('Ingrese el nombre de la tercer persona')
let edadMaxima = Math.max(edad1,edad2,edad3)

if(edadMaxima===edad1){
    document.write('la persona mas vieja es: '+nombre1)
} else if(edadMaxima===edad2){
    document.write('la persona mas vieja es: '+nombre2)
} else{
    document.write('la persona mas vieja es: '+nombre3)
}



