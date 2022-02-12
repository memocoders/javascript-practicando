/***************************************************************************
 Escriba una función llamada `atLeastOneEven` que devuelva `true` si al 
 menos uno de los números en la matriz de entrada son pares, de lo contrario
 falso. Debería arrojar un error si el argumento no es una matriz.
***************************************************************************/

//Fn Devuelve true si es un numero par.
var atLeastOneEven = function (list){
    if (!Array.isArray(list)) {
       throw "Solo arreglos permitidos";
    }
    
    var result=false;
    
    for (let index = 0; index < list.length; index++) {
        var auxIndex = list[index];
       if (auxIndex % 2 === 0) { result = true; }
    }
    return result;
}

console.log(atLeastOneEven([34,3,5,8,10]));