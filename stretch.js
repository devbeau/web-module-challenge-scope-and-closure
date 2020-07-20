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
// both locally and globally, at this step in the process. b will be defined, because
// it is being assigned the value of 3. This updates b, but a will not be 
// updated unless it is explicitly done so later.

/* Write a function that would allow you to do this using a closure.
/* (This is another interview question we've seen before - when you're
/* ready for answers, view an explanation here). */

function createBase(base){return () => base + 6}

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

/* Functional programming uses functions as their main method of problem-solving.
Functions return function and use co-functions to execute and structure the application.
object-oriented programming uses classes, inheritance, and objects to execute and structure
the application.

Functional programming is organized in functions with very clearly defined tasks. Every function
has a purpose, and should function on its own with its parameters. It focuses on highly reusable
and "perfect" functions that have few "side-effects," or code that manipulates anything
outside of itself. Functional programming offers a way to reason about the code base that
better facilitates deeper thinking, and allows many processes to be abstracted. It can require
a lot of mental overhead, however, and might require more effort and familiarity with the various
functions to start being useful, if you were dropped in the middle of a project, for instance.

Object-oriented is organized into classes, and objects. The logical organization is closer to
a "real-world" model. Buttons, forms, inputs, everything on the page becomes an object that has methods
that act upon it. This occurs either at the object level, or they are inherited from a class.
This can cause some difficulty debugging in the middle(as in scope-wise) of a large project.
It requires a decent amount of overhead for simple applications as well. Like functional programming,
it offers a way to reason about the code base beyond a procedural style.