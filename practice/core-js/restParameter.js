// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((x) => multiplier * x);
//   }
  
//   const arr = multiply(2, 1, 2, 3);
//   console.log(arr); // [2, 4, 6]


  // function Person() {
  //   this.age = 0;
  
  //   setInterval(() => {
  //     this.age++; // `this` properly refers to the person object
  //   }, 1000);
  // }
  
  // const p = new Person();

  var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}