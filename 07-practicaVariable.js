//  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = +prompt("ingrese un numero").trim();
let num2 = +prompt("ingrese otro numero").trim();
let num3 = +prompt("ingrese el ultimo numero").trim();

if( num1 > num2 && num1 > num3 ){
    document.write(`${num1} es mayor de los 3`)

}
else if( num2 > num1 && num2 > num3  ){
    document.write(`${num2} es mayor de los 3`)

}
else if(num3 > num1 && num3 > num2 ){
    document.write(`${num3} es mayor de los 3`)

}
else{

    document.write(`hay dos iguales , o todos son iguales`)

}
