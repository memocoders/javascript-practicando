/************************************************************************************************************
Un número es un número primo si solo es divisible por 1 y por sí mismo. Escribe una 
función llamada `isPrime` que acepte un número` p` como argumento y devuelve `verdadero`
si es primo,` falso` en caso contrario. Usando la función `isPrime`, escribe una 
función que acepte un número como la entrada suma todos los primos menores que ese 
número.
*********************************************************************************************************************/ 

// Fn.  Numeros primos o no.
var isPrime = function (number) {
    if (number % 1 === 0 && number % number === 0 && number > 1) {
        return true;
    }else{return false;}
}

// Fn. Suma solo numeros primos.
var sumPrimeNumbers = function (number) {
    
    var numberPrime = 0;
    
    for (let index = 1; index < number; index++) {
        if (isPrime(index)) {numberPrime+= index;} 
    }
    return numberPrime;
}

console.group("Sumatoria numeros Primos")
console.log(sumPrimeNumbers(11));
console.groupEnd;
