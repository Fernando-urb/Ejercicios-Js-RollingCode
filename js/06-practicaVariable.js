// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = +prompt("ingrese un numero").trim();
let num2 = +prompt("ingrese un numero").trim();
if(num1 > num2){
    document.write(`${num1} es mayor`)

}
else if(num2 > num1 ){
        document.write(`${num2} es mayor`)

}
else{
        document.write(`${num1} y ${num2} son iguales`)
}