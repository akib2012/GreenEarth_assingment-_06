### 1) What is the difference between var, let, and const?

a. var 
it is Old way generally used before ES6.
it Can be re-declare and updated.
limited scoped to the function where it’s declared

b. let
it is modern way generally used in ES6.
limited scoped to { } block
Can be updated but not re-declared in the same scope.

c. const
it used in ES6.
Block-scoped
it Cannot be updated , re-declare, 

### 2) What is the difference between map(), forEach(), and filter()? 

a. forEach()
Loops through every element in an array.
Do not return anything.
it always returns undefined. 
Used for side effects. 

b. map()

Loops through every element and creates a new array.
it use for the copy an new array

c. filter()

Loops through every element and keeps only the ones that match a condition.
Returns new array with only the elements that pass the test. 

### 3) What are arrow functions in ES6?

Arrow function is a shorter and better way to write functions in JavaScript, introduced in ES6.
They are also called "fat arrow functions" because they use the => syntax.

simple arrow function is :
const add = (a, b) => a + b;

here no need to write function keyword.
If there is  one statement i can skip {} this.

### 4) How does destructuring assignment work in ES6?

Array Destructuring: Instead of manually accessing array indexes, you can unpack values in one line.
Object Destructuring: You can directly extract properties from objects.
Destructuring in Function Parameters: Very useful for functions that take objects as arguments.

### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals is a another way to create strings in ES6 using backticks (``).
They make it easier to write , make more clears and  multi-line strings and embed variables or expressions directly inside a string.

a. string concatenation
"Hello, " + any things + "!". 
Harder for big strings. 
Need extra \n or + .
use to break string and add + . 

b. Template Literals

`Hello, ${akib}!` .  
more Cleaner & easier . 
Directly supports multiple lines and expressions. 
put ${2+3} inside the string. 


