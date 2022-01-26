//El Magic 8 Ball es un juguete clásico que te permite pedir un sí / no
// pregunta y responde con una respuesta aleatoria. La mayor parte del tiempo (al menos la mitad)
// responde con una respuesta "positiva", aproximadamente una cuarta parte de las veces que responde
// con una respuesta "neutral", y aproximadamente una cuarta parte de las veces responde con una
// "respuesta negativa. Puede leer más sobre el juguete Magic 8 Ball (y verlo
// respuestas reales) en Wikipedia.

// Fn. Determina si es una pregunta.
var lastCharacter = function name(string,character) {
    var findCharacter = string.slice(string.lastIndexOf(character))
    return findCharacter;
  }

//Fn. Numeros aleatorios
var randon = function name(number) {
    var numberRandon = Math.floor(Math.random() * 4) 
    return numberRandon;
}

//Fn. Que emula al juego Magic 8 ball
var magic8Ball = function (question) {
    var result;
    var rand;

    if (!lastCharacter(question,"?")) {
        throw "El texto ingresado debe ser una pregunta"
    }

    rand = randon(4);

    if (rand === 0) {
        result = "yes";
    }else if (rand === 1) {
        result = "Definitivamente";
    }else if (rand === 2) {
        result = "Tal vez.";
    }else if (rand === 3) {
        result = "No";
    }else{ throw "Es raro que no tenga un valor aleatorio";}

    return result;
}

console.log(magic8Ball("El Peru irá al mundial?"));