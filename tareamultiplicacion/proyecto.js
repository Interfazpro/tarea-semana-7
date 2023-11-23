/*Desarrollar una función que realice la multiplicación utilizando
 únicamente sumas. La función recibe como parámetros el multiplicador 
 y el multiplicando, utiliza un bucle para realizar sumas sucesivas y 
 devolver el resultado .   bucles ojo bucles*/

 function multiplicar(multiplicando,multiplicador){
    let suma = 0;
    for(let i = 0; i <multiplicador; i++){
        suma =suma + multiplicando;
    }
    return suma;
 }

 let primernumero = Number(prompt('Ingrese el primer valor'));
 let segundonumero = Number(prompt('Ingrese el segundo valor'));

 let resultado = multiplicar(primernumero, segundonumero);
 alert('Su resultado es ' +resultado);