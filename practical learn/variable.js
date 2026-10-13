/*
This script is running using Node.js Modules Intellisense extension (it is not web-based learning)
Reference: https://www.geeksforgeeks.org/javascript/javascript-tutorial/
*/

// 1. Variables
/*  
Variables in JavaScript are used to store data values. They can be declared in different ways depending on how the value should behave.
- Variables can be declared using var, let, or const.
- JavaScript is dynamically typed, so types are decided at runtime.
- You don’t need to specify a data type when creating a variable.
*/

// Old style
var a = 10;

// Preferred for non-const
let b = 20;

// Prefferred for const (cannot be changed)
const c = 30;

console.log(a, b, c); 
// The console object provides access to the browser's debugging console (or terminal in Node.js). It is used to log information, debug code, and interact with the runtime environment during development.

// Declaring Variables in JavaScript
/*
- Before ES6 (2015): Variables were declared only with var, which is function-scoped and global-scoped, causing issues like hoisting and global pollution.
- ES6 Introduction:let and const were introduced to provide safer alternatives for declaring variables.
- Scope: let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var.
*/

// a. var keyword
/**
* var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.
 */
var test1 = "Hello World";
var test2 = 10;
console.log(test1, test2)

// b. let keyword
/**
* let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables
*/
let d=5;
let e="Hi";
console.log(d,e);

// c. const 
/**
 * const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can't be reassigned, though objects can still be mutated.
*/
const test3="this is const variable";

const ob = {obj1: 10, obj2: "Hi!"}
console.log("testing object variable:", ob.obj1)
ob.obj1=15;
console.log("testing object variable:", ob.obj1)

const arr = [1, 2, 3];
console.log(`testing array type: `, arr);
arr[2] = 69;
console.log(`testing array type: `, arr);



