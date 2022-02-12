/*
 En una de las secciones anteriores, tuvimos un problema de práctica en el que 
 tenías que invertir una cadena. Haga lo mismo con una matriz, pero use `reduce` y
 Métodos `concat` para evitar variables locales.

 reversa([ 1, 2, 3, 4, 5 ]);
   => [ 5, 4, 3, 2, 1 ]

reversa([ "hola", "mundo" ,"Peru"]);
 => [ "mundo", "hola" ]
*/

var reverse = function (list) {
    return list.reduce(function (currentPrevious, current ) {
        return [current].concat(currentPrevious);
    });
}

console.log(reverse([1, 2, 3, 4, 5]));
