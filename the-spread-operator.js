/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array: ", arr2);
// Note:    arr1 also has 4 pushed to it because
//          arr2 isn't actual a copy of arr1 but
//          rather a new variable that points to
//          the same object as the other variable.
//
//          Anything done to arr1 gets done to arr2
//          and vice versa.
console.log("First array: ", arr1);


// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
// Note:    Spreads the VALUES of arr3 into arr4, 
//          thereby creating a NEW OBJECT.

arr4.push(7);
console.log("Third array: ", arr3);
console.log("Fourth array: ", arr4);
// Note:    See how 7 is only pushed into arr4.

// Copying an object
let obj1 = { a: 1,  b: 2,  c: 3, };
let obj2 = { ...obj1,  d: 4, };
let obj3 = { ...obj1, b: 5 };
// Note:    Doing the same with objects you can
//          add additional properties (obj2).
//          You can also overwrite values (obj3).

console.log("First Object: ", obj1);
console.log("Second Object: ", obj2);
console.log("Third Object: ", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log("Fifth array: ", arr5);