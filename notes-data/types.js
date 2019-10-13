// what are different types of javascript?

// primitive: boolean, number, string, null, undefined
// non primitive: object

// typeof returns the typeof

// dynamically typed
the type of var a = 'foo' will be infered
// A language is dynamically-typed if the type of a variable is checked during run-time

// static typed like JAVA you have to specify what type each variable will hold
String a = 'moo'

// advantages of dynamically typed languages

// advantages of statical typed languages

// if JavaScrtipt doesn't know the type of a variable it will be initialised with undefined

// it is used to inform you that it is either an unitialised value, a parameter that is missing from the
// parameters list or it is perhabs an unknown property
// null can set the value of a variable to null, JavaScript engine will never do that for you
// in Java it is the concept of an absent value

// type of null will return object but this is a mistake of the JavaScript engine known for years now

// null == undefined will return true (the value)



// difference between == and ===

0 === 0 // true
0 !== 1 // true
0 == 0 // true
0 != 1 // true

'' == '0' // false - the string is not equal

0 == '' // true

0 == '0' // true
0 === '' // false
0 === '0' // false

// === will just return true if both value and type are the same

0 == '0' // true
// this is because JavaScript will try to convert the number to a String 
// and then compare them
// type coersion is the name for it

false == 'false' // false because it is not trying to convert the boolean to a String
// Boolean('false') would return true

// https://dorey.github.io/JavaScript-Equality-Table/

// strict operator === should be used
// non strict operator should not be used since the behavior is not consistent

// -----------------------------------------------------------------------------------

typeof(NaN) // number
"abc"/5 // NaN

isNaN(1) // false
isNaN('1') // false
isNaN(isNaN) // true
isNaN('A') // true

// the parameter we pass in will be coerced (Number())

// trick in JavaScript
// the only water proof version to check if something is not a number is 

var a = NaN // undefined
a !== a // true
a = 1 
a !== a // false
a = 'a'
a !== a // false
