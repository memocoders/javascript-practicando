/***********************************************************************************
    Escriba una función llamada `allStrings` que acepte una matriz como argumento y
    devuelve `verdadero` si todos los valores de la matriz son cadenas. Debería
    devuelve falso si no son todas cadenas y arroja un error si la entrada es
    no es una matriz.

    allStrings([ "estos", "son", "todos", "cadenas" ]); //=> verdadero
***********************************************************************************/

//Fn. Reconoce cadenas
var isString = function (value) {
    return typeof value === "string";
}

// Fn. reconoce si elementos de array son todas cadenas
var allString = function (list) {
    if (!Array.isArray(list)) {
        throw "No es un array";
    }

    var isstring = true;

    for (let index = 0; index < list.length; index++) {
        if ( !isString(list[index])) {
            isString = false;
        }
    }

    return isstring;
}

console.log(allString([ "estos", "son", "no", 5 ])); 