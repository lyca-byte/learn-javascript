# learn-javascript
Learn from the god-tier website for learning programming and stuff: [Reference](https://www.geeksforgeeks.org/javascript/javascript-tutorial/`)


# JavaScript Tutorial
JavaScript is a programming language used to create `dynamic content` for websites. It is a lightweight, cross-platform, and single-threaded programming language. It's an interpreted language that executes code line by line, providing more flexibility.
- Client Side: On the client side, JavaScripts works along with HTML and CSS. HTML adds structure to a web page, CSS styles it, and JavaScript brings it to life by allowing users to interact with elements on the page, such as actions on clicking buttons, filling out forms, and showing animations. JavaScript on the client side is directly executed in the user's browser.
- Server Side: On the server side (on Web Server), JavaScripts is used to access databases, file handling, and security features to send responses, to browsers.

![alt text](/src/image.png)
![alt text](/src/image-1.png)
> Image reference: https://www.geeksforgeeks.org/javascript/javascript-tutorial/

## Why Learn JavaScript?
- Core language for web development, enabling dynamic and interactive features in websites with fewer lines of  code.
- Highly in demand, offering many job opportunities in Frontend, Backend (Node.js), and Full Stack Development.
- Supports powerful frameworks and libraries like React, Angular, Vue.js, Node.js, and Express.js, widely used in modern web applications.
- Object-oriented and event-driven language, ideal for building scalable and responsive applications.
- Cross-platform and runs directly in all modern web browsers without the need for installation.
- Major companies like Google, Facebook, and Amazon use JavaScript in their tech stacks.

---

# Introduction to JavaScript
JavaScript is a versatile dynamically typed programming language that brings life to web pagees by making them interactive. It is used for building interactive web applications and supports both client-side and server-side development.
- Dynamically typed: Variable types are determined at runtime.
- Single-threaded: Executes one task at a time (but supports asynchronous operations).
- Compild and interpreted: Modern JavaSCript engines combine compilation and interpretation for better performance

![alt text](/src/image-2.png)
![alt text](/src/image-3.png)
> image reference: https://www.geeksforgeeks.org/javascript/introduction-to-javascript/

## "Hello World" Program in Server Console
```javascript
// This is a comment
console.log("Hello, World!");
```
Run it in your terminal with:
```bash
node [file_name].js
```

## Features of JavaScript
Here are some key features of JavaScript that make it a powerful language for web development:
- Client-Side Scripting: JavaScripts runs on the user's browser, so it has a faster response time without needing to communicate with the server.
- Versatile: Can be used for a wide range of tasks, from simple calculations to complex server-side applications.
- Event-Drive: Responds to user actions (click, keystrokes) in real-time.
- Asynchronous: It can handle tasks like fetching data from servers without freezing the user interface.
- Rich Ecosystem: There are numerous libraries and frameworks build on JavaScript, such as React, Angular, and Vue.js, which make development faster and more efficient.

## Client Side and Server Side nature of JavaScript
![alt text](/src/image-4.png)
> image reference: https://www.geeksforgeeks.org/javascript/introduction-to-javascript/

JavaScript's flexibility entends to both the client-side and server-side, allowing developers to create complete web applications. Here's how it functions in each environment:
- Client-Side: Involves controlling the browser and its DOM (Document Object Model). Handles user events like click and form inputs. Common libraries include AngularJS, ReactJS, and VueJS.
- Server-Side: Involves interacting with databases, manipulating files, and generating responses. Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.

## Programming Paradigms in JavaScript
JavaSccript supports both imperative and declarative programming styles:
- Imperative Programming: Focuses on how to perform tasks by controlling the flow of computation. This include approches like   `procedural` and `object-oriented programming`, often using constructs like async/await to handle asynchronous actions.
- Declarative Programming: Focuses on what should be done rather than how it's done. It emphasizes describing the desired result, such as with arrow functions, without detailing the steps to achieve it.

# JavaScript Variables
Variables in JavaScript are used to store data values. They can be declared in different ways depending on how the value should behave.
- Variables can be declared using var, let, or const.
- JavaScript is dynamically typed, so types are decided at runtime.
- You don't need to specify a data type when creating a variable.

```javascript
// Old style
var a = 10    

// Prferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);
```

## Declaring Variables in JavaScript
- Before ES6 (2015): Variables were declared only with `var`, which is `function-scoped` and `global-scoped`, causing issues like `hoising` and global pollution
> function-scoped and global-scoped: https://www.geeksforgeeks.org/javascript/javascript-scope/ <br>
> hoisting: https://www.geeksforgeeks.org/javascript/javascript-hoisting/
- ES6 Introduction: `let` and `const` were introduced to provide safer alternatives for declaring variables.
- Scope: `let` and `const` block-scoped (limited to {} block) or global-scoped, reducing errors compared to var.  

### `var` keyword
`var` is a keyword in JavaScript used to declare variables and it is `function-scoped` and `hoisted`, allowing redeclaration but can lead to unexpected bugs
```javascript
var a = "hello world";
var b = 10;
console.log(a);
console.log(b);
```
### let keyword
let is a keyword in JavaScript used to declare variables and it is `block-scoped` and not hoisted to the top, suitable for mutable variables/
```javascript
let a=12;
let b="test";
console.log(a);
console.log(b);
```

### const keyword
const is a keyword in JavaScript used to declare variables and it is `block-scoped`, immutable bindings that can't be reassigned, though objects can still be mutated.
```javascript
const a = 5;
let b = "test"
console.log(a);
console.log(b);
```

### Rules for Naming Variables
When naming variables in JavaScript, follow these rules:
- Variable names must begin with a letter, underscore (_), or dollar sign ($)
- Subsequent characters can be letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive (e.g., age and Age are different variables).
- Reserved keywords (like function, class, return, etc) cannot be used as variable names.

These are some examples of variable:
```javascript
let userName = "lappydumby"; //valid
let $price = 100; //valid
let _temp = 0; //valid
let 123name = "lappy"; //invalid
let function = "test" //invalid
```

### Interesting Facts about Variables in JavaScript
1. `let` or `const` are preferred over `var`: Initially, all the variables in JavaScript were written using the `var` keyword but in ES6 the keywords `let` and `const` were introduced. The main issue with var is scoping.
```javascript
if (true){
    var x = 10;
    let y = 20;
}
console.log(x); // 10 (var is function-scoped)
console.log(y) // Error (let is block-scoped)
```

2. `var` is function scoped: Can be accessed outside block if within the function
```javascript
if (true){
    var x = 10;
}
// Accessible outside the block because er are in same function
console.log(x);
```

3. `let` and `const`are `block-scoped`: Cannot be accessed outside block even if inside the same function
```javascript
if (true){
    let y = 20;
    const z = 30
}
console.log(y, z) //ReferenceError
```

4. `var` can be redeclared in same scope, but let and const cannot be
```javascript
var x = 10;
var x = 20; // Allowed

let y = 30;
let y = 40; // SyntaxError

const z = 50;
const z = 60; // SyntaxError
```
5. We can change elemnts of array or objects even if declared as const
```javascript
const ob = {a: 10};
ob. a = 20; // Allowed

const arr = [10, 20, 30];
console.log(arr);
arr[2] = 40;
console.log(arr); // Allowed

/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] */
```

# JavaScript Data Types
JavaScript data types define what kind of values a variable can hold and how those values behave in a program. They determine how data is tored in memory and how operations like comparison, calculation, and conversino work.
- Each data type has its own methods and operations that control how it can be used.
- Underestanding data types helps prevent errors and makes code more efficient and reliable.

## JavaScript Data Type Categories
JavaScript data types are categorized into Primitive and Non-Primitive types
![alt text](/src/image-5.png)

### Primitive Data Types
Primitive data types in JavaScript represent simple, immutable values stored directly in memory, ensuring efficiency in both memory usage and performance
#### Numeric Types
1. `Number`  
The `number` data type in JavaScript includes both `integers` and `floating-point` numberes. Special values like `Infinity`, `-Infinity`, and `NaN` represent infinite values and computational errors, respectively.
```javascript
let n1 = 2;
console.log(n1);

let n2 = 1.3;
console.log(n2);

let n3 = "Infinity";
console.log(n3);

let n4 = 'something here too'/2;
console.log(n4); 
```
2. `BigInt` (Introduced in ES2020)  
`BigInt` is a built-in object that provides a way to represent whole numbers greater that 253. The largest number that JavaScript can reliably represent with the `number` primitive is 253, which is represented by the `MAX_SAFE_INTEGER` constant.
```javascript
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);
```

#### Non-Numeric Types
3. `String`  
A `string` in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript which are:
```javascript
let s1 = "Hello There";
console.log(s1);

let s2 = 'Single quotes work fine';
console.log(s2);

let s3 = `can embed ${s1}`;
console.log(s3);
```

4. `Boolean`  
The `boolean` type has only two values i.e. true and false.
```javascript
let b1 = true;
console.log(b1);

let b2 = false;`
console.log(b2);
```

5. `Null`  
The special `null` value doesn not belong to any of the default data types. It forms a separate type of its own which contains only the null value.
```javascript
let age = null;
console.log(age);
```
> The `null` data type defines a special value that represents `nothing`, or `empty value`.

6. `Undefined`  
A variable that has been declared but not initialized with a value is automatically assigned the undefined value. it means the variable exists, but it has no value assigned to it.
```javascript
let a;
console.log(a);
```

7. `Symbol` (introduced in ES6)  
`Symbol` introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.
```javascript
let s1 = Symbol("test");
let s2 = Symbol("test");
console.log(s1 == s2);
```
<br>

> [see more about `Symbols` method](https://www.geeksforgeeks.org/javascript/javascript-symbol-method/)

### Non-primitive Data Types
The data types that are derived from mitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.
1. `Object`
JavaScript `object` are key-value pairs used to store data, created with {} or the new keyword. They are fundamental as nearly everything in JavaScript is an object
```javascript
let gfg = {
    type: "Company",
    location: "Noida"
};
console.log(gfg.type);
```
> [see more about `object`](https://www.geeksforgeeks.org/javascript/objects-in-javascript/)

2. `Array`
An `array` is a special kind of object used to store an ordered collection of values, which can be of any data type.
```javascript
let a1 = [1, 2, 3, 4];
console.log(a1);

let a2 = [1, "two", {name: "Object"}, [3, 4, 5]];
console.log(a2);
```

3. `Function`
A `function` in JavaScript is a block of reusable code designed to perform a specific task when called.
```javascript
// Defining a function to greet a user
function greet(name){
    return "Hello, " + name + "!"; 
}
// Calling the function
console.log(greet("lappy"));
```
> [see more about `function`](https://www.geeksforgeeks.org/javascript/functions-in-javascript/)

4. `Date Object`
The `Date` object in JavaScript is used to work with dates and times, allowing for date creating, manipulation, and formatting.
```javascript
// Creating a new Date object for the current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);
```
> [see more about `date` object](https://www.geeksforgeeks.org/javascript/javascript-date-objects/)

5. `Regular Expression`
A `RegExp` (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.
```javascript
// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is a not present
let result = pattern.test("Hello, world!");
console.log(result);
```
> [see more about `RegExp`](https://www.geeksforgeeks.org/javascript/javascript-regexp-w-metacharacter/)