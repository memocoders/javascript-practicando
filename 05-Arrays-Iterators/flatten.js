/*
 Para este problema, escribe una función usando `reduce` que "aplana" un posible
 matriz anidada en una sola matriz.

  flatten([ 1, 2, [10, 20],  3, 4, 5 ]);
  => [ 1, 2,  3, 4, 5, 10, 20]

  flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
  => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

var flatten = function(list) {
    return list.reduce(function (currentPrevious, current){
        return Array.isArray(current)? 
        currentPrevious.concat(current): currentPrevious.concat([current]);
    },[]);
}

console.log(flatten([ 1, 2, [10, 20],  3, 4, 5 ]));
