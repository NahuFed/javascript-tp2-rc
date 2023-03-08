// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666


let numero = 0
do{
    numero=parseInt(prompt('ingrese un numero del 1 al 30'))
if (numero>=1 && numero<=30){
    for(i=1 ; i <= numero;i++){
        for(j=1 ; j<= i; j++){
            document.write(i)
        }
        document.write('<br>')
    }
}else{
    alert('no es un numero valido')
}
}while(isNaN(numero)===true || numero<=0 || numero>30) 