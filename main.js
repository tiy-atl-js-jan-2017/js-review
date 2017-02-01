
/*

 Primitive Data Types

 1. Boolean
 2. String
 3. Number
 4. Null
 5. Undefined

  Custom Data Types

 1. Document
 2. Element
 3. Event

Compound / Collection Data Types

 1. Array
 2. Object Literals

 */

var stuff = [1, "cookies", 4, "dogs", null, undefined, false, 0, NaN, "melee"];

// We can put anything we'd like into an array, even other arrays!
var stillJustAnArray = [[1, 2,], [3, 4], [5, 6]];
// stillJustAnArray[3] => undefined (out of bounds)

var item = stillJustAnArray[1]; // => [3, 4]
// item[0] => 3
var three = stillJustAnArray[1][0];
// item[1, 0] => SyntaxError!
// item[1[0]] => undefined! (because 1[0] is undefined...)

// Equality of primitive data types is based on value
// Equality of custom and compound data types is based on identity
var x = 3;
var y = 3;
// x === y => true

// => "1,2,3,45,6,7,8" (because it did .toString() so it could figure out how to +)
var notWhatYouThink = [1,2,3,4] + [5,6,7,8];

/*

 Functions in Javascript are _First Class Values_

 There are 3 main consequences of this:

 1. Functions don't need to have a name.
 2. Functions can be used as arguments to other functions.
 3. Functions can return another function as a result.

 If a function does either of the latter two things, it is sometimes called a "higher order function".
 (There is a special version of this called a closure that we'll discuss, probably next week.)

 */

function sayHello () {
  console.log("Hi there!");
  return "Hello";
}

function doTwice (action) {
  action();
  action();
}

// doTwice(sayHello) is different than doTwice(sayHello())!
// Play with the return statements a bit. :)


/*

 TWO VERY IMPORTANT IMPLICATIONS OF USING HIGHER ORDER FUNCTIONS
   like `doTwice(sayHello)`

  1. The HOF (doTwice) is in charge of what arguments the passed function (sayHello) gets.
  2. The HOF (doTwice) is in charge of what happens with the return value from sayHello.

 */

// Argument names only matter at function boundaries!
function add (x, y) {
  // inside this function, I *have* to refer to x and y, to get the data
  return x + y;
}

// Argument passing checks the values on the outside *first*,
// then sends them into the function
var a = 4;
var x = 5;
add(a, x);


/*

 A brief digression on objects

 */

var instructors = [
  { firstname : 'JD', teaches : 'JavaScript'},
  { firstname : 'Tim', teaches : 'JavaScript'},
  { firstname : 'Brit', teaches : 'Ruby'},
  { firstname : 'Joe', teaches : 'iOS'},
  { firstname : 'Jake', teaches : 'JavaScript'},
  { firstname : 'Will', teaches : 'JavaScript'},
  { firstname : 'Calvin', teaches : 'JavaScript'},
  { firstname : 'James', teaches : 'Ruby'}
];

var firstInstructor = instructors[0];
var firstInstructorTeaches = instructors[0].teaches; // instructors[0]["teaches"]

// Two ways to access properties inside an object!
// firstInstructor['teaches']
// firstInstructor.teaches

var propName = "firstname";
console.log(firstInstructor.propName); // firstInstructor['x'] NOT firstInstructor[x]
console.log(firstInstructor[propName]); // only way to look up a property stored in a variable

/* looping with nested data */

for (var i = 0; i < instructors.length; i++) {
  var instructor = instructors[i];
  console.log(instructor.teaches);
}

// instructors.teaches
var thingsTaught = [];
for (var i = 0; i < instructors.length; i++) {
  var instructor = instructors[i];
  thingsTaught.push(instructor.teaches);
}
console.log(thingsTaught);
