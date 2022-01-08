/***************************************************************************
Escribe una función que acepte una cadena y devuelva la misma cadena, solo en
¡contrarrestar!

reverse ("¡hola mundo!");
=>! dlrow olleh
*****************************************************************************/ 

//funcion que detecta cadenas
var isString = function (value) {
    return typeof  value === "string";
    //true, si es cadena
    //false, no es cadena
}

var reverseWordl = function (wordl) {
    if (!isString(wordl)) {
        throw "Solo palabras...";
    }
    
    var word1Reverse ="";

    for (let index = wordl.length - 1; index >= 0; index--) {
        var element = wordl[index];
        word1Reverse+=element
    }
    return word1Reverse;
}

console.log(reverseWordl("Mix lo mas nuevo 2022"));