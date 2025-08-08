// Escribe un programa que pida un número y diga si es divisible por 2

let num = +prompt (`ingrese un numero `).trim();

if( num % 2 === 0){

    document.write(`${num} es divisible por 2`)

}
else{
     document.write(`${num} no es divisible `)
}