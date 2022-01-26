// Escribe una función llamada `isQuestion` que devuelva verdadero si la entrada es un
// cadena y termina en un signo de interrogación. Usaremos esta función en el próximo
// problema de práctica.

//funcion que detecta cadenas
var isString = function (value) {
    return typeof  value === "string";
    //true, si es cadena
    //false, no es cadena
}

//Fn. Determina el ultimo caracter de una cadena
var lastCharacter = function name(string,character) {
  var findCharacter = string.slice(string.lastIndexOf(character))
  return findCharacter;
}


var isQuestion = function (cadena,caracter) {
    if (isString(cadena) && lastCharacter(cadena, caracter) === caracter) {
        return true;
    }
    else{return false;}
    
}

console.log(isQuestion("Hola desde Peru?", "?"));