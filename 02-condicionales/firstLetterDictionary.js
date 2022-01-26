
//Escribe una función que acepte tres cadenas y devuelva la
// que vendría primero en el diccionario.


// Determinar si son cadenas.
var isString = function (value) {
    return typeof value === "string"
}

// Determina la primera palabra en forma alfabetica
var firstLetterDictionary = function (wordA,wordB,wordC) {
    
    if (!isString(wordA) || !isString(wordB) || !isString(wordC)) {   
        throw "Los tres argumentos deben ser cadenas..." 
    }

    if (wordA < wordB && wordA < wordC) {
        return wordA;
    }else if(wordB< wordA && wordB < wordC){
        return wordB;
    }
    else{ return wordC;}
}

console.log(firstLetterDictionary("Musa", "Silla", "Martillo"));
    