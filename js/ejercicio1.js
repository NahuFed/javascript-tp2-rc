// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje.
let edad = 0
do{
    edad = parseInt(prompt('ingrese su edad'))    
        if(isNaN(edad)===false && edad > 0){
            if(edad>18){
                document.write('Usted ya puede conducir')
            }else{
                document.write('Usted no puede conducir')
            }    
        } else{
            alert('usted no ha ingresado un numero valido')
        } 
}while(isNaN(edad)===true || edad < 0)

