/*
 Escriba una función llamada esUsuario que acepte un objeto y devuelva verdadero si es
 un objeto de usuario válido, falso en caso contrario. Un objeto de usuario válido contendrá un
 propiedad llamada `name` que es una cadena, y una propiedad llamada `screen_name`
 que también es una cadena. No debe contener otras propiedades.
*/

let isUser = function (userObject) {
    if (typeof(userObject) === "object" &&  Object.values(userObject) !==null
        &&  Object.keys(userObject)[0]=== "name" && Object.keys(userObject)[1] === "screen_name") {
        return true;
    }else{return false;}
}

console.log(isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" }));
//=> verdadero

// isUser({ "name":"Firstname Lastname", "screen_name":"user" });
//=> verdadero

// esUsuario("semmypurewal");
//=> falso
