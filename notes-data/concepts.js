"use strict";
var a = 1;
var b = {};
function foo(x, y) {
  x = 2;
  y.moo = 3;
}

foo(a, b);
console.log("a = " + a + "; b = " + JSON.stringify(b));

// ----------------------------------------------------

// throwing error in use strict mode but not in non use strict mode

// What will the below code print out?
("use strict");
var myVariable = 3;
myVarible = 1; // spelling mistake
console.log(myVarible);

// will throw an error

// ----------------------------------------------------
