// Escribe una función llamada `sumAToB` para que acepte dos parámetros
// `a` y` b` y suma los números entre `a` y` b` inclusive. Nota
// que `a` puede ser más grande que` b`, en cuyo caso tendrás que trabajar
// al revés.


//Fn. Acepta solo numeros
var numPosite = function (number) {
    if ( typeof number === "number") {
        return true; 
    }else{return false;}
}

//Fn. Suma los numeros entre A y B
var sumAToB = function (numberA, numberB) {
    if (!numPosite(numberA) || !numPosite(numberB)) {
        throw "Los valores deben ser solo numeros...! "
    }

    var start;
    var end;
    var totalSum = 0;

    if (numberA < numberB) {
        start = numberA;
        end = numberB;
    }else{
        start = numberB;
        end = numberA;
    }


    for (let index = start; index <= end ; index++) {
        totalSum += index;   
    }

    return totalSum;
}

console.log(sumAToB("hello", 20));