// 17- Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.
let texto = prompt('ingrese texto').toLowerCase()

for(i=0;i<texto.length;i++){
    if(texto.charAt(i)==='a' || texto.charAt(i)==='e' || texto.charAt(i)==='i' || texto.charAt(i)==='o' || texto.charAt(i)==='u' ){
        document.write('la primera vocal esta en la posicion ',i)
        break
    }
    
}
