/***************************************************************************
/ Escribe una función llamada `countNumber` que acepta un número y una matriz,
// y devuelve la cantidad de veces que aparece  en la matriz, y `falso`
//
// countNumber(5, [1, 2, 3, 4, 5,10, 20, 5]);
// => 2
*****************************************************************************/ 

var countNumber = function (value, array) {
    var count = 0;

    for (let index = 0; index < array.length; index++) {
        if (value === array[index]) {count++;}       
    }
    return count;
}

console.log("Nro apariciones:"+ countNumber("g", ["f","df","G","g"]) );