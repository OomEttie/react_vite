// values
const number = 1;
const greeting = 'Hello';

// function declaration
function foo() {
  return 'bar';
}

// named function expression - possible
// because functions are first-class
// and therefore usable as values
const otherFoo = function () {
  return 'bar';
};

// using arrow functions and implicit return
const anotherFoo = () => 'bar';

// ***** Higher-Order Functions *****
const identity = (x) => x;

const ident1 = identity(1); // 1
// Used as Higher-Order Function
const ident2 = identity(foo);
// ƒ foo() {
//   return 'bar';
// }
const ident3 = identity(foo)(); // 'bar'
