// ejercicio n°1 
// alert ("Bienvenido a mi pagina de ejercicios de Js")



// ejercicio n°2

// document.write("Hello World")



// ejercicio n°3
// let num1 = 3;
// let num2 =5;
// let suma = num1+num2;
// document.write(" resultado de suma es ", suma)




// ejercicio n°4


// let nombre=prompt("ingrese su nombre");
// document.write("hola" ${nombre} )



// ejercicio n°5  parseInt transforma un string en un entero

// let numero1 = prompt("ingrese un numero");
// let numero2 = prompt("ingrese otro numero para sumarlo");
// let resultado =parseInt(numero1) + parseInt(numero2) ;
// document.write(resultado)

 // otra forma de transforma un string en un entero

 
// let numero1 = +prompt("ingrese un numero");
// let numero2 = +prompt("ingrese otro numero para sumarlo");
// let resultado =numero1 + numero2 ;
// document.write(resultado)




// ejercicio n°6 

// let num1 = +prompt("ingrese un numero")
// let num2 = +prompt("ingrese otro numero")

// if(num1 > num2){
//     document.write(num1 ," es mayor");
// }
// else if(num1 < num2){
//     document.write(num2 , " es mayor")
// }
// else{
//     document.write("son iguales")
// }


// ejercicio n°7

// let num1 = +prompt("ingrese un numero")
// let num2 = +prompt("ingrese un segundo numero")
// let num3 = +prompt("ingrese un tercer numero")

// if(num1 > num2 && num1 > num3){
//     document.write(num1 ," es mayor");
// }
// else if(num2 > num1 && num2 > num3){
//     document.write(num2 , " es mayor")
// }
// else if(num3 > num1 && num3 > num2){
//     document.write(num3 , " es mayor")
// }
// else{
//     document.write("son iguales")
// }


    // switch (true){

    //     case num1 > num2 && num1 > num3:
    //         document.write(num1 , " es mayor ")
    //         break;
            
    //     case num2 > num1 && num2 > num3:
    //         document.write(num2 , " es mayor ")
    //         break;

            
    //     case num3 > num1 && num3 > num1:
    //         document.write(num3 , " es mayor ")
    //         break;
    //     default :
    //     document.write("son iguales todos")


    // }




// ejercicio n°8

// let numeroDivisible = +prompt("ingrese un numero")

// if( numeroDivisible %2 ===0 ){
//     document.write("Felicitaciones " , numeroDivisible , " es divisible en 2")

// }
// else{
//     document.write (numeroDivisible," no es divisible")

// }



// ejercicio n°9

// let frase = prompt("ingrese un texto cualquiera")

// for( let i = 0 ; i < frase.length ; i++){
    
//      vocal = frase[i];
      
//     if(vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u"){
//         document.write(vocal)
      
//     }




// }






// ejercicio n°10



let numero = +prompt("ingrese un numero");

switch (true) {
    case numero % 2 === 0:
        document.write(numero  ," es divisible por 2"  )
        
        break;
            case numero % 3 === 0:
        document.write(numero  ," es divisible por 3"  )
        
        break;
            case numero % 5 === 0:
        document.write(numero  ," es divisible por 5"  )
        
        break;
            case numero % 7 === 0:
        document.write(numero  ," es divisible por 7"  )
        
        break;

    default:
        document.write(numero , "no es divisible por ninguno de los anteriores")
        break;
}



// ejercicio 11 

let prom








