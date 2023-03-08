// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).

let numero = 0
do{
    numero=parseInt(prompt('ingrese un numero del 1 al 50'))    
    if(numero > 0 && numero  <= 50){
        for(let i = numero; i > 0 ; i--){
        
            for(let j = i; j>0; j--){
                document.write(i)
            }
        
            document.write('<br>')
        
        }
    }else{
        alert('no es un numero valido')
    }
}while(isNaN(numero)===true || numero<=0 || numero>50)
