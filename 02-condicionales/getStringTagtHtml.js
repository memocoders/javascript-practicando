// Escribe una función que extraiga una etiqueta de una cadena que represente un HTML
// elemento, pero arroja un error si la cadena no es un elemento HTML. Puedes reutilizar
// una de sus funciones de la sección anterior (o, mejor aún, vea si puede
// recuerda cómo reescribirlo).

//Fn. Para determinar si es un elemento HTML | true o
var isElementTagHtml = function (tag) {
    var openTag = tag.substring(tag.indexOf("<")+1, tag.indexOf(">")) ;
    var closeTag= tag.substring(tag.lastIndexOf("<")+2 , tag.lastIndexOf(">"))
    return tag.charAt(0) === "<" && tag.charAt(tag.length -1) === ">" && openTag === closeTag;
}

//Fn. Obtiene el elemento de la etiqueta.
var getElementTagHtml = function (element) {
    if (!isElementTagHtml(element)) {throw "No es un elemento HTML5";}
    else{ return element.substring(1, element.indexOf(">"))}
        //element.slice(1, element.indexOf(">"));}
    
}

console.log(getElementTagHtml("<title>Figuras Geometricas | Curso de Javascript</title>"));