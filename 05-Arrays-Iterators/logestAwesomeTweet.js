/*
 Escriba una función que acepte una lista de tweets y devuelva el
 tweet más largo que contiene la palabra `impresionante` o la cadena vacía
 si ningún tweet contiene la palabra impresionante.

 logestAwesomeTweet([ "impresionante", "tweet más largo con impresionante", "no impresionante", "vacío" ]);
 => "tweet más largo con impresionante"

 más largoTweetAwesome([ "hola", "mundo" ]);
 => ""
*/ 

var longstAwesomeTweet = function (listTweets) {
    return listTweets.filter(function (tweet) {
        return tweet.toLowerCase().indexOf("impresionante");
    }).reduce(function (currentPrevious, current) {
       return current.length >  currentPrevious.length ? current: currentPrevious;
    },"");
}

console.log(longstAwesomeTweet([ "impresionante", "tweet más largo con Impresionante", "no impresionante", "vacío" ]));