/*
 Write a function called `toTagString` that accepts two inputs: a tag name,
 and the string content, and returns the content tagged with the specified
 string.
*/

// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function (tag, content) {
    var result = openTag(tag) + content + closeTag(tag);
    return result;
};


//     toTagString("li", "list item 1");
//     => <li>list item 1</li>

//     toTagString("em", "this is important stuff");
//     => <em>this is important stuff</em>
