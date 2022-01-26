// Escribe una función llamada `sumUpTo` para que acepte un número positivo` n`
// y suma los primeros `n` enteros positivos. Por ejemplo, si llama a `sumUpTo (5)`
// debe sumar los números del 1 al 5 inclusive. Debería arrojar un error si el
// el número de entrada es negativo.
// sumUpTo (100);
// => 5050

//Fn. No acepta nros negativos
var numPosite = function (number) {
    if (number > 0 &&  typeof number === "number") {
        return true; 
    }else{return false;}
}

var sumUpto = function (value) {
    if (!numPosite(value)) {
        throw "Solo numeros y positivos"
    }else{
        var sumValue = 0;

        for (let index = 1; index <= value; index++) {
            sumValue += index; 
        }
    }
    return sumValue; 
}

console.log(sumUpto("45"));