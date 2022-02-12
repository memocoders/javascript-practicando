/*
 Escriba una función que acepte una matriz de HTMLElements y devuelva un
 matriz de su contenido.

 elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
  => [ "this is a paragraph", "list item", "link!" ]

 elementsToContent([ ">h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
=> [ "This is an important heading!", "this is not as important" ]
*/ 

var elementsToContent = function (listElements) {
    return listElements.map(function (element) {
        var arrayElementHtml="";
        return arrayElementHtml += [element.substring(element.indexOf(">")+1)];
    }).map(function (element) {
        var arrayElementHtml="";
        return arrayElementHtml +=  [element.substring(0 , element.indexOf("<"))];
    });
};

console.log(elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>","<p>this is a paragraph</p>" ]));

