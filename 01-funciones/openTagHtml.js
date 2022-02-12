/*
 Write a function called `openTag` that accepts a tag name and returns an
 opening HTML tag with that tag name. For example,
*/


var openTag = function (tag) {
    var open = "<" + tag + ">";
    return open;
};

console.log(openTag("p"));

//     openTag("p");
//     => <p>

//     openTag("div");
//     => <div>