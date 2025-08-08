// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


let IngreseNumero = +prompt("ingrese un numero").trim();

if(IngreseNumero % 2 === 0){
    document.write(`${IngreseNumero} es divisible por 2`);

}
else if(IngreseNumero % 3 === 0){
    document.write(`${IngreseNumero} es divisible por 3`);

}
else if(IngreseNumero % 5 === 0){
    document.write(`${IngreseNumero} es divisible por 5`);

}
else if(IngreseNumero % 7 === 0){
    document.write(`${IngreseNumero} es divisible por 7`);

}
else{
    document.write(`${IngreseNumero} no es divisible por ninugno `)
}