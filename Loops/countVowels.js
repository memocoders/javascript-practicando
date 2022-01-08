// Escribe una función llamada `countVowels` que acepte una cadena y
// devuelve el número de vocales contenidas en esa cadena. Querrás
// para usar la función auxiliar `isVowel` de arriba. Debería lanzar un
// error si la entrada no es una cadena

//Fn. Reconoce Vocales
var isVowel = function (vowel) {
    vowel = vowel.toLowerCase();
    var resultVowal;

    if (vowel === 'a') {
        resultVowal = true;
    }else if (vowel === 'e') {
        resultVowal = true;
    }else if (vowel === 'i') {
        resultVowal = true;
    }else if (vowel === 'o') { 
        resultVowal = true;
    }else if (vowel === 'u' ) {
        resultVowal = vowel;
    }else{return false;}

    return resultVowal;
}

//Fn. Detecta cadenas
var isString = function (value) {
    return typeof  value === "string";
    //true, si es cadena
    //false, no es cadena
}



//Fn Cuenta Vocales
var countVowels = function (value) {

    var totalVowel=0;

    if (!isString(value)) {
        throw "Solo se permite cadenas de letras"
    }

    for (let index = 0; index < value.length; index++) {
        if (isVowel(value[index])) {
            totalVowel+=1;
        }  
    }

    return totalVowel;
}

console.log(countVowels("muercielago"));

