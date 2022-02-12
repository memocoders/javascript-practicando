/*
 Escriba una función llamada atLeastOneVowel que acepte una cadena y
 devuelve verdadero si esa palabra contiene al menos una vocal. 
 OJO! No use un Bucle `for` o un bucle `forEach`.

  atLeastOneVowel("hello");
  => true
  
  atLeastOneVowel("dry");
  /=> false
  
  atLeastOneVowel("sdfjkl");
  => false
*/

var atLeastOneVowel = function (wordls){
    var arrayWordls = wordls.split("");
    return arrayWordls.some(function (letter){
       
       switch (letter) {
           case "a":
           case "e":
           case "i":
           case "o":
           case "u":  
               return true;
       
           default:
            return false;
       }
 });   
};

console.log(atLeastOneVowel("sdsdsdsd"));

