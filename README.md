# learn-javascript
Learn from the god-tier website for learning programming and stuff: [Reference](https://www.geeksforgeeks.org/javascript/javascript-tutorial/`)


# JavaScript Tutorial
JavaScript is a programming language used to create `dynamic content` for websites. It is a lightweight, cross-platform, and single-threaded programming language. It's an interpreted language that executes code line by line, providing more flexibility.
- **Client Side**: On the client side, JavaScripts works along with HTML and CSS. HTML adds structure to a web page, CSS styles it, and JavaScript brings it to life by allowing users to interact with elements on the page, such as actions on clicking buttons, filling out forms, and showing animations. JavaScript on the client side is directly executed in the user's browser.
- **Server Side**: On the server side (on Web Server), JavaScripts is used to access databases, file handling, and security features to send responses, to browsers.

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
- **Dynamically typed**: Variable types are determined at runtime.
- **Single-threaded**: Executes one task at a time (but supports asynchronous operations).
- **Compild and interpreted**: Modern JavaSCript engines combine compilation and interpretation for better performance

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
- **Client-Side**: Involves controlling the browser and its DOM *(Document Object Model)*. Handles user events like click and form inputs. Common libraries include AngularJS, ReactJS, and VueJS.
- **Server-Side**: Involves interacting with databases, manipulating files, and generating responses. Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.

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
### `let` keyword
`let` is a keyword in JavaScript used to declare variables and it is `block-scoped` and not hoisted to the top, suitable for mutable variables/
```javascript
let a=12;
let b="test";
console.log(a);
console.log(b);
```

### `const` keyword
`const` is a keyword in JavaScript used to declare variables and it is `block-scoped`, immutable bindings that can't be reassigned, though objects can still be mutated.
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

# *Type Conversion* and *Type Coercion* in JavaScript
Data types in JavaScript are flexible due to which the type of the variables can be changed when the program runs. *Type Conversion* and *Type Coercion* are the two ways through which we can change the data  type of the variables from one type to the other.

## *Type Conversion*
*Type Conversion* is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.
- Performed manually by the programmer.
- Uses built-in JavaScript methods like `Number()`, `String()`, and `Boolean()`.

### Performing Type Conversion
Performing type conversion means changing a value from one data type to another, such as converting strings, numbers, or booleans when needed in a program.

1. `String` to `Number`  
We can convert a string into numbers using `Number()` function, `parseInt()`, and `parseFloat()` methods.
```javascript
let s = "123";
let n = Number(s);
console.log(n);
```

2.`Number` to `String`  
We can convert a number into a string using `String()` function or we can concatenate it with anu empty sting ("").
```javascript
let n = 123;
let s = String(n);
console.log(s);
```

3. `Boolean` to `Number`  
We can convert a boolean into a number using `Number()`, so `true` becomes `1` and `false` becomes `0`.
```javascript
let bool = true;
let n = Number(bool);
console.log(n);
```

4. `Boolean` to `String`  
We can convert boolean into string using `String()` or by concatenating it with an empty string.
```javascript
let bool = true;
let s = String(bool);
console.log(s);
```

## *Type Coercion*
Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.
- Performed automatically by JavaScript.
- Happens mostly in comparison and arithmetic operations.
- Can lead to unexpected results if not handled properly.

### Examples of *Type Coercion*
1. `String` + `Number`  
JavaScript will automatically or implicitly convert the numer to a string if there is the string present in arithmetic operation.
```javascript
let n = 5;
let s = "5";
let res = n + s; // JavaScript converts num to string
console.log(res)
console.log(typeof(res))
```

2. `Boolean` + `Number`    
JavaScript converts the boolean value into a number, `true` becomes `1` and `false` becomes `0`, when we perform the arithmetic operations.
```javascript
let bool = true;
let n = 10;
let res = bool + n;
console.log(res);
```

3. Comparison of Different Types  
JavaScript convert the two value of data type into the common type when we compare their values.
```javascript
let s = "10";
let n = 10;
console.log(s == n); // true, JavaScript converts str to number
```

4. Boolean Context  
JavaScript converts non-boolean value into the boolean value when the value is in the if statement.
```javascript
let s = "";
if (s){
    console.log("This won't print"); // Empty string is false
}
else{
    console.log("This will print") // Empty string is coerced to false
}
```

## Difference Between *Type Conversion* and *Type Coercion*
<table>
    <thead>
        <tr>
            <th style="width: 33%; text-align: center;">Feature</th>
            <th style="width: 33%; text-align: center;">Type Conversion</th>
            <th style="width: 33%; text-align: center;">Type Coercion</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">Performed by</td>
            <td style="text-align: center;">Programmer</td>
            <td style="text-align: center;">JavaScript Engine</td>
        </tr>
        <tr>
            <td style="text-align: center;">Type</td>
            <td style="text-align: center;">Explicit</td>
            <td style="text-align: center;">Implicit</td>
        </tr>
        <tr>
            <td style="text-align: center;">Control</td>
            <td style="text-align: center;">Full control</td>
            <td style="text-align: center;">Happens automatically</td>
        </tr>
        <tr>
            <td style="text-align: center;">Examples</td>
            <td style="text-align: center;">Number("5") → 5</td>
            <td style="text-align: center;">"5" - 2 → 3</td>
        </tr>
    </tbody>
</table>

## Best Practices for handling Type Conversion and Coercion
- Always use explicit type converson where possible to avoid unexpected results.
- Use === instead of == to prevent unintended type coercion in comparisons.
- Convert inputs explicitly before performing operations.
- Use `typeof` to check data types before processing values.

# JavaScript Control Flow Statements
Control flow statements in JavaScript control the order in which code is executed. These statements allow you to make decision, repeat tasks, and jump between parts of a program based on specific conditions.
> [see more about statement in JavaScript](https://www.geeksforgeeks.org/javascript/javascript-statements/)

## JavaScript `if`, `if else` and `if - else if - else` Statement
### JavaScript `if` Statement
The `if` statement executes a block of code only if a specified condition is `true`.
![alt text](/src/image-6.png)
> image reference: https://www.geeksforgeeks.org/javascript/javascript-control-flow-statements/
```javascript
const age = 18
if (age >= 18){
    console.log("You are an adult.")
}
```

- Check if age is greater than or equal to 18.
- Logs "You are an adult." if the condition is true.

### JavaScript `if - else` Statement
The `if else` statement provides an alternate block of code to execute if the condition is `false`.
![alt text](/src/image-7.png)
> image reference: https://www.geeksforgeeks.org/javascript/javascript-control-flow-statements/
```javascript
const score = 40
if (score >= 50){
    console.log("You passsed.")
}
else {
    console.log("You failed.")
}
```

- It will log "You passed." if the score is 50 or more.
- Otherwise, logs "You failed."

### JavaScript `if - else if - else` Statement
The `if - else if - else` statement is used when you want to handle multiple conditions.
![alt text](/src/image-8.png)
```javascript
const temp = 25
if (temp > 30){
    console.log("It's hot.")
}
else if (tempt >= 20){
    console.log("It's warm.")
}
else {
    console.log("It's cold.")
}
```

- Check if the temperature is greater than 30, logs "It's hot."
- If not, check if it's between 20 and 30, logs "It's warm."
- Otherwise, logs "It's cold."

## JavaScript `switch` Statement
The switch sstatement evaluates an expression and executes a block of code based on matching cases. It provides an alternative to long `if-else` chain.
![alt text](/src/image-9.png)
```javascript
const day = "Monday"
switch(day){
    case "Monday":
        console.log("Start of the week.")
        break;
    case "Friday":
        console.log("End of the workweek.")
        break;
    default:
        console.log("It's a regular day.")
}
```

- Checks the value of day and matches it to a case.
- Logs "Start of the week. " if day is "Monday".
- Logs "End of the workweek. " if day is "Friday".
- Logs "It's a regular day." if no cases match.
> Note: Without break, execution continues to teh next case statements (fall-through behaviour)

## JavaScript Looping Statements
Looping statements are used to execute a block of code repeatedly based on a condition. 
1. JavaScript `for` Loop
The `for` loop is used **when the number of iterations is known**.
```javascript
for(let i = 1; i <= 3; i++){
    console.log(i);
}
```

- Initializes a counter, checks condition, and updates it in each iteration.
- Executes the block until the condition becomes `false`.

2. JavaScript `while` Loop
The `while` loop runs as long as the condition is `true`.
```javascript
let i = 1;
while(i<=3){
    console.log(i)
    i++
}
```

- Checks the condition before each iteration.
- Executes the block only if the condition is `true`.

3. JavaScript `do while` Loop
The `do while` loop executes the block at least once even if the condition is `false`.
```javascript
let i = 1
do{
    console.log(i)
    i++
} while(i<=3)
```

- Executes the block first, then checks the condition.
- Ensures at least one execution.

## *Ternary Operator* or *Conditional Operator*
In some programming languages, a *ternary operator* is used to assign a value to a variable based on a condition
![alt text](/src/image-10.png)
```javascript
let a = 10
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5")
```
> The form of *ternary operator*: [Variable Checking Conditon] ? [Output when `true`] : [Output when `false`];


- let a = 10; assigns the value 10 to variable a
- a === 5? ... : ... checks if a is strictly equal to 5.
- Returns "a is equal to 5" if true.
- Returns "a is not equal to 5" if false.

## Uses of Control Flow Statements
Control flow statements are backbone in programming for:
- **Decision-Making**: To execute specific blocks of code based on conditons (e.g., `if`, `if-else`).
- **Branching**: To exit loops or skip iterations (`break`, `continue`).
- **Looping**: To repeat tasks (`for`, `while`, `do while`).
- **Switching**: To handle multiple conditoins  effectively (`switch`).

# Operator
JavaScript operators are symbol or keywords used to perform operations on values and variables. They are the build block of JavaScript expressions and can manipulate data in various ways.

There are various operators supported by JavaScript:
1. JavaScript Arithmetic Operators  
Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.
```javascript
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);
```

- + adds two numbers.
- - subtracts the second number from the first.
- * multiplies two numbers.
- / divides the first number by the second.

2. JavaScript Assignment Operators  
Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication while assigning the value.
```javascript
let n = 10;
n += 5;
n *= 2;
console.log(n);
```

- = assign a value to a variable.
- += adds and assigns the result to the variable.
- *= multiplies and assigns the result to the variable.

3. JavaScript Comparison Operators  
Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.
```javascript
console.log(10 > 5);
console.log(10 === "10");
```

- > checks if the left values is greater than the right.
- === checks for strict equality (both type and value).
- Other operators include <, <=, >=, and !==.

4. JavaScript Logical Operators  
Logical operators are mainly used to perform the logical operatons that determine the equality or difference between the values.
```javascript
const a = true, b = false;
console.log(a && b)
console.log(a || b)
```

- && returns true if both operands are true.
- || returns true if at least one operand is true.
- ! negates the boolean value.

5. JavaScript Bitwise Operators  
Bitwise operators perform operations on binary representations of numbers.
```javascript
const res = 5 & 1
console.log(res)
```

- & performs AND operation on each bit.
- | performs OR operation on each bit.
- ^ performs XOR (exclusive OR) on each bit.
- ~ inverts all bits (NOT operator).
- << shifts bits to the left.
- [>>] shifts bits to the right (with sign).
- [>>>] shifts bits to the right (without sign).

6. JavaScript Ternary Operator    
The ternary operator is a shorthand for conditional statements. It takes three operands.
```javascript
const age=18
const status = age >= 18 ? "Adult" : "Minor"
console.log(status)
```

> condition ? expression 1 : expression 2
>> Evaluates expressioin 1 if the condition is true, otherwise evaluates expression 2

7. JavaScript Comma Operator  
Comma operator mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand.
```javascript
let n1, n2
const res=(n1 = 1, n2 = 2, n1+n2)
console.log(res)
```

- The final result of the expression is the rightmost value.

8. JavaScript Unary Operators  
Unary operators operate on single operand (e.g., increment, decrement).
```javascript
let x = 5

console.log(+x)
console.log(-x)

console.log(++x)
console.log(--x)

console.log(!x)
```

- + converts a value to a number
- - negates a value (changes it sign).
- ++ increments a value by 1.
- -- decrements a value by 1.
- ! convers to boolean and the reverses the value (true ↔ false).
- typeof returns the data type of a variable.
- delete removes a property from an object.

9. JavaScript Relational Operators  
JavaScript relational operators are used to compare its operands and determine the relationship between them. They return a Boolean value (true or false) based on the comparison result.
```javascript
const obj = {length: 10}
console.log("length" in obj)
console.log([] instancceof Array)
```

- `in` checks if a property exist in an object
- `instanceof` checks if an object is an instance of a constructor

10. JavaScript BigInt operators  
BigInt operators allow calculations with numbers beyond the safe integer range.
```javascript
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);
```

- Operations like addition, subtraction, and multiplication work with BigInt.
- Use n suffix to denote BigInt literals.

11. JavaScript String Operators  
JavaScript string operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine string with other data types.
```javascript
const s="Hello" + " " + "World"
console.log(s)
```

- $\text{+}$ concatenates strings
- $\text{+=}$ appends to an existing string.

12. JavAScript Chaining Operator(?.)  
The optional chaining operator allows sade access to deply nested properties without throwing errors if the property doesn't exist.
```javascript
const obj={name:"Aman", address: {city: "Delji"}}
console.log(obj.address?.city)
console.log(obj.contact?.phone)
```

Output:  
```bash
Delhi
undefined
```

- ?. safely accesses a property or method.
- Returns undefined if the property doesn't exist.

# Scope of Variables in JavaScript
Scope in JAvaScript defines where a variable can be accessed or used within a program. It controls the visibility and lifetime of variables across different parts of the code.
- Determines the accessibility of variables in different parts of the program.
- Helps prevent conflict by restricting variable usage to specific areas.
- Improves code organization and readability.
- Defines the lifetime of variables during program execution.
- Main types include **global scope**, **local (function) scope**, and **block scope**.

1. Global and Local Scope  
- Global Scope  
A global variiable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.
```javascript
// Global Variable accessed from within a function
const x = 10
function fun1(){
    console.log(x)
}
fun1()
```

The variable x is declared in the global scope and can be accessed inside functions. However, global scope behavior may vary depending on the execution environment (e.g., browser vs module)

- Local Scope  
A local variable is a variable declared within a function, making it accessible only inside that function. It cannot be used outside the function. Variables declared inside a block using `let` or `const` are block-scoped.
```javascript
function fun2(){
    // This variable is local to fun2() and cannot be accessed outside this function
    let x = 10
    console.log(x)
}

fun2()
```

Here, the code defines a function `fun2` with a local variable `x`, which is accessible only inside the function, and prints its value when the function is called.
- Before ES6 (released in 2015), JavaScript primarily used `var` for variable declarations. `var` is function-scoped and when declared outside a function, become globally scoped (in classic scripts).
- ES6 introduced `let` and `const`, which are block-scoped and help avoid issues such as accidental global variables and unintended redeclarations

2. Block and Lexical Scope
- Block Scope  
Block scope in JavaScript means variables declared with `let` or `const` inside {} are accessible only within that block, and accessing them before declaration (TDZ) causes a ReferenceError
> Variables declared with `var` do not have block scope. If declared inside a function, they are accessible throughout that function regardless of block such as `if` statements or loops. IN classic scripts, a `var` declared outside any function become globally scoped. In ES modules, top-level `var` is module-scoped.
```javascript
{
    // var can accessible inside & outside the block scope
    var x = 10

    // let, const accessible only inside the block scope
    const y = 20
    let z = 30
}

console.log(x)
```

We have successfuully accessed the variable with the `var` keyword because `var` does not have a block scope.

- Lexical Scope  
Lexical scope means a function can access variables from the scope in which it was defines. The scope is determined by the code structure, not by where the function is called.
```javascript
function func1(){
    const x = 10

    function func2(){
        const y = 20
        console.log(`${x} ${y}`)
    }

    func2()
}

func1()
```
> This code demonstrates *lexical scope*, where `func2` accesses the variable `x` from `func1` and prints "10 20".

- Module Scope  
Module scope refers t variables and functions that are accessible only within a specific JavaScript module. It helps keep code organized and prevents variabels from affecting the global scope.
```javascript
//math.js (module file)
export const number = 10
export function add(a, b){
    return a + b
}
```

```javascript
import {number, add} from "./math.js"
console.log(number)
console.log(add(5, 3))
```

- math.js has variables and funcctions inside its module scope
- They are only accessible in other files when we use **export** and **import**.

# JavaScript Hoisting
**Hoisting** refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using `var`, `let`, `const`, or function expressions.
![alt text](/src/image-11.png)

- Hoisting applies to variable and function declarations
- Initializations are not hoisted, they are only declarations.
- `var` variables are hoisted with undefined, while `let` and `const` are hoisted but remain in the Temporal Dead Zone until initialized.

Before learning more about hoisting, it's important first to understand the **Temporal Dead Zone**.

## Temporal Dead Zone (TDZ)
The Temporal Dead Zone is the period in JavaScript between entering a scope and the initialization of variables declared with `let` or `const`, during which accessing them results in an error.
- Variables declared `let` and `const` are hoisted but not initialized.
- Accesssing these variables before their declaration throws a ReferenceError.
- Initialization ocurs only when execution reaches the declaration line.
- TDZ exists only within the scope where the variable is declared.
- It applies only to `let` and `const`, not to `var` (which is initialized as undefined)
```javascript
hello() //TypeError: hello is not a function
var hello=function(){
    console.log("Hi")
}
```
> Note: The variable hello is hoisted, but it is not initialized until the assignment line is reached since it holds a function expression. Thus, calling `hello()` before its initialization throws a TypeError.

## Types of Hoisting
Hoisting in JavaScript refers to moving declarations to the top of their scope before code execution.
1. Variable Hoisting with `var`  
When you use `var` to declare a variable, the declaration is hoisted to the top, but its value not assigned until the code execution reaches the variable's initialization. This results in the variable beign assigned undefined during the hoisting phase. 
```javascript
console.log(a) // undefined
var a=5
```
The output is:
```text
undefined
```
> ***Note***: The declaration `var` is a hoisted to the top, but `a` is initialized with undefined. Hence, logging results in undefined.

2. Variable Hoisting with `let` and `const`  
Unlike `var`, `let` and `const`are also hoisted, but they remain in a Temporal Dead Zone (TDZ) from the start of the block until their declaration is encountered. Accessing them before their declaration will throw a ReferenceError.
```javascript
console.log(b) //ReferenceError: Cannot access `b` before initialization
let b=10
```
> ***Note***: The variable is hoisted, but it's in the Temporal Dead Zone (TDZ) until the declaration line is executed.

3.  Function Declaration Hoisting  
Function declarations are hoisted with both their name and the function body. This means the function can be called before its definition in the code.
```javascript
greet()
function greet(){
    console.log("Hello")
}
```
> ***Note:*** The function declarationi is hoisted, and the entire function definition is available before its position in the code.

4. Function Expression Hoisting  
Function expressions are treated like variable declarations. The variable itself is hoisted, but the function expression is not assigned until the line of execution. This means calling the function before its assignment will result in an error.
```javascript
hello()
var hello=function(){
    console.log("hi")
}
```
> ***Note:*** The variable hello is hoisted, but since it's a functioni expression, it's not initialized until the line is executed.

5. Hoisting with `let` and `const` in Functions  
Variables declared with `let` and `const` inside a function are hoisted to the top of the function's scope, but they remain in the TDZ. This prevents access to them before they initialized.
```javascript
function test(){
    console.log(x) // ReferenceError: Cannot access 'x' before initialization
    let x = 50
}
test()
```
> ***Note:*** The variable `x` is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ

6. Hoisiting with Classes  
Classes are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.
```javascript
const obj=new MyClass()
class MyClass{
    constructor(){
        this.name="Lappy Dumby"
    }
}
```
> ***Note:*** Although the class MyClass is hoisted, it cannot be accessed before its declaration due to the TDZ, which is why the code throws a ReferenceError

7. Re-declaring Variables with `var`  
With `var`, you can redeclare a variable within the same scope. This is a unique behavior compared to `let` and `const`.
```javascript
var a=10
var a=20 // No error
console.log(a) // 20
```
> ***Note:*** With `var`, the second declaration overwrites the first one without throwing an error

8. Accessing Variables Declared Later in Loops  
When using `var` in loops, the loop variable is hoisted to the function or global scope, which can cause unexpected behavir. If you use `let`, the variable is block-scoped and behaves as exprected.
```javascript
for (var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i) // 3, 3, 3
    }, 100)
}
```

9. Using Hoisted Functions with Parameter  
Function can be hoisted with their parameters, but any parameters passed to the function are still determined by the invocation, not by the hoisting.
```javascript
test(10)
function test(num){
    console.log(num)
}
```
> ***Note:*** The entire function, including its parameters, is hoisted and available for use before the function's declaration in the code. 

10. Hoisting in Nested Functions
Hoisting works within nested functions as well. Variables declared with `var` inside a function are hoisted to the top of that function scope.
```javascript
function outer(){
    console.log(a)
    var a = 5
    function inner(){
        console.log(b)
        var b=10
    }
    inner()
}
outer()
```
> ***Note:*** Both a and b are hoisted within their respective scopes (outer and inner functions), but their valus are not set until the code execution reaches the initialization lines.

# JavaScript Function Binding
In JavaScript, function binding refers to the process of associating a function with a specific context (this value). The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.
- **`this` Binding**: Functions in JavaScript are executed in a context. By default, `this` refers to the global object or is undefined in strict mode.
- **Permanent Binding**: When a function is bound to a specific object using `bind()`, it will always use that object as the context when invoked, no matter how it is called.
- Partial Application: Function binding can also allow you to pre-fill arguments, creating a partially applied function.
```javascript
const person={
    name: 'Lappy',
    greet: function(){
        console.log("Hello, "+this.name)
    }
}
const greet=person.greet
greet()
```

When `greet()` is called directly (without being bound to the person object), the value of this is not person anymore. Instead, it refers to the gloabl object (in non-strict more) or is undefined (in strict mode).

## Methods of Function binding
1. `bind()` Method  
The `bind()` method is used to create a new function that, when called, has its this value set to a specified value, regardless of how the function is invoked.
```javascript
const person={
    name: "Lappy",
    greet: function(){
        console.log("Hello", + this.name)
    }
    
}
const greet=person.greet
const boundGreet=greet.bind(person)
boundGreet()
```

This code defines a person object with a greet method, binds it to the person object using bind() and then calls the bound function to correctly reference the person's name when executed

2. `call()` Method  
The call() method immediately invokes a function, allowing you to set the value of this and pass arguments to the function.
```javascript
const person= {
    name:"Lappy",
    greet: function(city){
        console.log("Hello," + this.name + " from " + city)
    }
}
person.greet("Delhi")
const greet=person.greet
greet.call(person, "Noida")
```

This code defines a greet method in the person object, calls it with "Delhi" directly, and then uses call() to invoke the method with "Noida", ensuring the `this` context is correctly bound to person.

3. `apply()` Method  
Similar to `call()`, the `apply()` method invokes a function and allows you to set the value of this, but the difference is that the arguments are passed as an array (or an array-like object)
```javascript
const person={
    name: "Lappy",
    greet: function(city, country){
        console.log("Hello," + this.name + " from " + city + ", " + country)
    }
}

person.greet("Bandung", "Indonesia")
const greet=person.greet
greet.apply(person, ["Noida", "Jakarta"])
```

This code defines a greet method in the person object, call it with "Bandung" and "Indonesia", then uses `apply()` to invoke the method with "Noida" and "Jakarta" by passing arguments as an array while maintaining the `this` context. 

## Arrow Functions and `this` Binding
Arrow functions behave differently when it comes to the `this` keyword. They do not have their own this context. Instead, arrow functions inherit the `this` value from the surrounding lexical context.
```javascript
const person={
    name: "Lappy",
    greet: function(){
        const arrowGreet=()=> {
            console.log("Hello," + this.name)
        }
        arrowGreet()
    }
}
person.greet()
```
This code defines a greet method in the person object, which contains an arrow function arrowGreet that logs the person's name using the `this` keyword from the enclosing greet method's context.
