/* Predict the output of the code below and explain why this is the output
/* using what you learned today. When you're ready for answers, view an explanation
/* [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
*/
(function(){
    var a = b = 3;
})();
console.log("This is Stretch 1", "a defined? " + (typeof a !== 'undefined'));
console.log("This is Stretch 1", "b defined? " + (typeof b !== 'undefined'));

// a will be undefined, as it is being assigned to the value of b first, and b is undefined
// at the first step in the process. b will be defined, because it is being assigned
// the value of 3. This updates b, but a will not be updated unless it is explicitly done
// so later.

/* Write a function that would allow you to do this using a closure.
/* (This is another interview question we've seen before - when you're
/* ready for answers, view an explanation here). */

function createBase(base){
    return () => base + 6
}

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27
console.log("This is Stretch 2", createBase(20)());
console.log("This is Stretch 2", addSix(10));
console.log("This is Stretch 2", addSix(21));


/* Research the differences between functional programming and object oriented
/* programming. Then, describe the pros and cons of functional programming
/* vs object-oriented programming. This is a common interview question
/* and great practice! */

