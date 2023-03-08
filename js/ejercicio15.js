// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt('ingrese texto').toLowerCase()
let contador = 0

for(i=0;i<texto.length;i++){
if(texto.charAt(i)==='a' || texto.charAt(i)==='e' || texto.charAt(i)==='i' || texto.charAt(i)==='o' || texto.charAt(i)==='u' ){
    contador++
}
}
document.write('cantidad de vocales: ' + contador)