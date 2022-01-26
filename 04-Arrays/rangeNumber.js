/***********************************************************************************
    Usando un bucle `for` estándar, junto con la función `push`, escribe una función
    llamado `rango` que acepta dos números, `begin` y `end`, y devuelve una matriz
    que contiene todos los números enteros que comienzan en `begin` y terminan en `end`
    (incluyendo `begin` y `end`). Por ejemplo:

   rango(5,10); => [5, 6, 7, 8, 9, 10]
   rango(0,3); => [0, 1, 2, 3]
***********************************************************************************/

// Fn. Son numeros?
var isNumber = function (value) {
    return typeof value === "number";
}

//Fn. Rango numeros.
var range = function (begin, end) {
    
    if (!isNumber(begin) || !iNnumber(end)) { throw "Los argumentos del rango deben ser numeros";}
    
    //Añade elementos array
    var rangeArray  = [];
    for (let index = begin; index <= end; index++) {
       rangeArray.push(index)
    }

    //Imprime elementos array
    // for (let index = 0; index < rangeArray.length; index++) {
    //     console.log(rangeArray[index]);  
    // }
    console.log(rangeArray);
}



console.log(range("Hola",12));
