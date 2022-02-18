/*
 Write a function that accepts an array of strings, and returns an object that
 represents the number of times that each string appears in the array. This might
 sound confusing, but this is what we'd like to have happen.
*/

//  frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]);
//  => { "hello" : 3, "world" : 2, "goodbye": 1, "thing" : 1 }

//     frequencies([]);     
//=> {}

//     frequencies([ "hello", "world" ]);
//     => { "hello" : 1, "world" : 1 }

// There are several ways you can do it, but it might be interesting to try it with
// the `reduce` method that starts with an empty objects.

