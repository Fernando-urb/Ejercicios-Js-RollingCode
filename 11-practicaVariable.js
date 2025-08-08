// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let IngreseNumero = +prompt("ingrese un numero").trim();

if(IngreseNumero % 2 === 0){
    document.write(`${IngreseNumero} es divisible por 2 <br>`);

}
if(IngreseNumero % 3 === 0){
    document.write(`${IngreseNumero} es divisible por 3 <br>`);

}
 if(IngreseNumero % 5 === 0){
    document.write(`${IngreseNumero} es divisible por 5 <br>`);

}
 if(IngreseNumero % 7 === 0){
    document.write(`${IngreseNumero} es divisible por 7 <br>`);

}
