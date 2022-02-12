/*
 Similarly, write a function called `closingTag` that returns the closing HTML tag
 with that name.
*/
var closeTag = function (tag) {
    var close = "</" + tag + ">";
    return close;
};

console.log(closeTag("p"));
//     closeTag("p");
//     => </p>

//     closeTag("div");
//     => </div>
