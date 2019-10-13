"use strict";

// scopes in JavaScript

var myVariable = 1;

// declared variables outside of any function will be global variables, they are available for every part of
// your code unless they haven't been redefined somewhere in your code
// the global object in a browser will be the global one

window.moo = 1;

// all global variables are properties of the global window variable
// therefore window.myVariable will return 1 because it was added automatically
// but only inside the browser, in node it woule be globe

// local scope

function foo() {
  var bar = 1;
}
console.log(bar); // will return Uncaught ReferenceError: bar is not defined

// we can print it inside the function because it is within the function and the variable is available

// in Python, Java or C++  there is a concept called block level scope which doesn't exist in JavaScript

for (var i = 0; i < 5; i++) {
  var j = 5;
}

console.log(j); // will print out 5 because by declaring the for loop JavaScript also declares the variables
// inside the global scope

// so in JavaScript there is either a function scope or a global scope

// ---------------------------------------------------------------------

// variable hoisting

console.log(a); // it will print undefined
var a = 1;

// JavaScript split var a = 1 into var a; and a = 1 and puts the var a at the top
// so JavaScript is automatically hoisting the declaration to the top of it's enclosing scope
// the same behavior works with functions but only if it is declared as a function

function foo() {
  var a = 1;
  console.log(a);
}

// if it is declared like that, in an anonymous way

var foo = function() {
  var a = 1;
  console.log(a);
};

// because in this scenario it will move the declaration of var foo to the top, but it will return
// undefined since it won't be a function it's hoisting is not moving the anonymous function to the top

// scope chain

// function scopes can nest inside other function scopes
// first a function scope looks inside their own scope, if it can't find the variable there it will look
// into their outer function scope and it will keep looking outer and outer of it until it reaches the
// global scope
// important: scope chain is defined by the way the code is written

function foo() {
  console.log(myVariable);
}

function bar() {
  var myVariable = 1;
  foo();
}

bar();

// this will throw a ReferenceError

function bar() {
  var myVariable = 1;
  function foo() {
    console.log(myVariable);
  }
  foo();
}

bar();

// this will print 1
// the same happens if myVar is declared and assigned in the global scope

// why? lexical nature of the scope chain
// the variables are resolved in the order of the code has been written inside the file

// IIFE imeediately invoke functional expression

var thing = { hello: "main" };
console.log("main ", thing);

// if you have multiple javascript files but using the same naming for example the global scope of
// the loaded js files will overwrote the variables

// so what do we do to prevent this?

function otherThingDeclaration() {
  var thing = { hello: "other" };
  console.log("other ", thing);
}
otherThingDeclaration();

// there is a more conceiced way:

(function otherThingDeclaration() {
  var thing = { hello: "other" };
  console.log("other ", thing);
})(); // this brackets are calling this function, it will immediately be invoked

// it calls the function straight away

// we usually don't want to set global variable so wrapping up every function like that is a good way
// we don't want to create global or sudo global
