# Practice Questions

## Computer/Terminal
- What do each of the following terminal commands do?
  - pwd: lists exact position in files
  - ls: lists all files in current directory
  - man: used to display the user manual of any command that we can run on the terminal
  - cd: current direcotry
  - mkdir: make directory 
  - touch: make file
  - cat: allows us to create single or multiple files, view content of a file, concatenate files and redirect output in terminal or files

## Git
- What do each of the following git commands do?
  - git init: initialize git
  - git status: show adds and commits
  - git add .  will add all the files in that directory, including the files beginning with a dot
  - git add filename.js  will add this file to the directory 
  - git commit -m "commit message" commits changes -- pencil to pen
  - git push >> local to remote 
  - git pull >> remote to local (always pull before pushing)
  - git stash >> when you want to record the current state of the working directory and the index, but want to go back to a clean working directory
  - git clone someURL... >> clone remote repo to local machine
- Why is it important to have good git commit messages? >> if you need to revert to a previous commit, you can. If you are
working with someone else, they know where to look in the code for changes


## HTML
- What do each of the following HTML tags represent? When would you use them?
  - <article>:
  - <aside>:
  - <body>:
  - <button>:
  - <div>:
  - <footer>:
  - <h1>:
  - <head>:
  - <header>:
  - <html>:
  - <input>:
  - <img>:
  - <li>:
  - <nav>:
  - <ol>: ordered list
  - <p>:
  - <script>:
  - <section>:
  - <span>:
  - <title>:
  - <ul>: unordered list
- How many of each of the following tags can you have on a page?
  - <h1>
  - <p>
  - <body>
  - <li> list element
- What is the difference between an `inline` element and a `block` element?
<p> and <div> are block elements. <span> is an inline element.
A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
An inline element does not start on a new line.
An inline element only takes up as much width as necessary.
- When would you use `class` vs `className`?
The name className is used for this property instead of class because of conflicts with the "class" keyword in many languages which are used to manipulate the DOM.
- What property must you give an <img> tag in order for it to display an image?
src - Specifies the path to the image. alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed
- What is the syntax for adding a comment in HTML?
<!-- -->

## CSS
- What do each of the following CSS properties represent? When would you use them?
  - color:
  - background-color:
  - border:
  - width:
  - height:
  - font-weight:
  - font-family:
  - text-decoration:
- What syntax would you use to select:
  - a type of HTML element: element
  - an HTML element with a specific class: .class
  - an HTML element with a specific ID: #id
- what is the syntax for adding a comment in CSS? /* */ 
- what does `@media (min-width: 500px)` do?
sets a breakpoint at 500px
The @media rule is used in media queries to apply different styles for different media types/devices.

Media queries can be used to check many things, such as:

    width and height of the viewport
    width and height of the device
    orientation (is the tablet/phone in landscape or portrait mode?)
    resolution

- what is the difference between `display: none` and `visibility: hidden`?

## JS
- name three types of loops.
  for loop, while loop, forEach
- What's the difference between `let` and `const`?
let varaibles can change; const variable cannot 
- What's the difference between a `for loop` and a `while loop`?
for loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong
- When would you use `return` and when would you use `console.log`?
console. log() is a function used to print information to the console. return on the other hand is a call to pass some value back up to where the call was made
- What's the difference between a `function` and a `method`?
A method is a function that is a property of an object
- Go on MDN and review the Array method docs for `findIndex()` and `indexOf()`. How are they similar? How are they different?
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
// Arrow function
findIndex((element) => { /* … */ })
findIndex((element, index) => { /* … */ })
findIndex((element, index, array) => { /* … */ })

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function (element) { /* … */ })
findIndex(function (element, index) { /* … */ })
findIndex(function (element, index, array) { /* … */ })
findIndex(function (element, index, array) { /* … */ }, thisArg)

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
indexOf(searchElement)
indexOf(searchElement, fromIndex)


- Go on MDN and review the Array method docs for `join()` and `toString()`. How are they similar? How are they different?
 The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 
 const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

The toString() method returns a string representing the object. This method is meant to be overridden by derived objects for custom type conversion logic.
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// expected output: "Gabby"


- Go on MDN and review the Array method docs for `slice()` and `splice()`. How are they similar? How are they different?
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 
slice()
slice(start)
slice(start, end)

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

- Go on MDN and review the Array method docs for `map()` and `forEach()`. How are they similar? How are they different?
 The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
 const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

The forEach() method executes a provided function once for each array element. 
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

- Suppose I declare an array using `const array = ['one', 'two', 'three]`.
  - Can I add items to the array? If so, how?
  array.unshift - add to beginning
  array.push - add to end
  array.splice(1, 0, "one and a half") >> Inserts at index 1
  - Can I remove items from the array? If so, how?
  array.shift - removes from beginning
  array.pop - removes from end
  array.slice(1,2) - removes element at index 1
  - Can I assign the variable `array` to point to a different data type, like an object?
- What is the syntax for adding a comment in JS?
//
/**
*/
- What is the index of the first item in an array?
0
- There are three different characters you can use to note the beginning and end of a string. What are they?
''
""
``

string
- What do each of the following symbols mean/do?
  - `>`: greater than
  - `==`: loosely equals
  - `&&`: and logical operator
  - `+`: add
  - `<=`: less than or equal to 
  - `+=`: plus equals, same as saying = + value
  - `=`: assign a value to a variable 
  - `!`: bang operator (doesn't equal)
  - `===`: strictly equals -- exactly equals 
  - `-`: subtract
  - `++`: plus 1
  - `||`: or logical operator
  - `!==`: doesn't equal 
- What is the data type of each of the following?
  - [1,2,3] array
  - "foo" string
  - false boolean 
  - {foo: 'something', bar: 42} object
  - 3 number 
- What do each of the following lines of code do?
  - `console.log('hello, world!');`
  - prints `hello, world!` to the console

  ## DOM
- Name three types of DOM events: mouse event, touch event, keyboard event
- What method would you call to select a DOM node using the same kind of selector (such as '.foo' or '#bar') you'd use for a CSS class?
document.querySelector(".foo")
document.querySelector("#bar")
- What method would you use to create a new DOM node?
document.createElement("span")