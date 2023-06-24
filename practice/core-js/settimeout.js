// setTimeout(() => {
//   console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//   console.log("this is the second message");
// }, 3000);
// setTimeout(() => {
//   console.log("this is the third message");
// }, 1000);

const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // prints "one" after 1.5 seconds