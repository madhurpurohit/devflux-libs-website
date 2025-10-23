import { CheatSheetCard } from "../utils/CheatSheetCard";
import { handleLinkClick } from "../utils/handleLinkClick";

// Main data source for the JavaScript cheat sheet
const jsData = [
  {
    id: "variables-datatypes",
    category: "Variables & Data Types",
    items: [
      {
        title: "Variable Declaration",
        description:
          "<b>Description:</b> Variables are containers for storing data values.<br>• <b>var:</b> Function-scoped. Can be re-declared and updated.<br>• <b>let:</b> Block-scoped. Cannot be re-declared but can be updated.<br>• <b>const:</b> Block-scoped. Cannot be re-declared or updated.",
        code: `let name = "John";\nconst age = 30;`,
      },
      {
        title: "Data Types",
        description:
          "<b>Description:</b> JavaScript has several data types.<br>• <b>Primitive:</b> String, Number, BigInt, Boolean, undefined, null, Symbol.<br>• <b>Non-Primitive:</b> Object (which includes Array, Function, etc.).",
      },
      {
        title: "Template Literals",
        description:
          "<b>Description:</b> A way to create strings that allows for embedded expressions and multi-line strings.",
        code: "const greeting = `Hello, ${name}!`;",
      },
      {
        title: "Variable Scopes",
        description:
          "<b>Description:</b> Determines the accessibility of variables.<br>• <b>Global Scope:</b> Variables declared outside any function.<br>• <b>Function Scope:</b> Variables declared with `var` inside a function.<br>• <b>Block Scope:</b> Variables declared with `let` and `const` inside a block `{}`.",
      },
    ],
  },
  {
    id: "operators",
    category: "Operators",
    items: [
      {
        title: "Arithmetic Operators",
        description:
          "<b>Description:</b> Perform mathematical operations.<br><b>Values:</b> `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division), `%` (Modulus), `**` (Exponentiation), `++` (Increment), `--` (Decrement).",
      },
      {
        title: "Comparison Operators",
        description:
          "<b>Description:</b> Compare two values.<br><b>Values:</b> `==` (Equal to), `===` (Strict equal to), `!=` (Not equal to), `!==` (Strict not equal to), `>` (Greater than), `<` (Less than), `>=` (Greater than or equal to), `<=` (Less than or equal to).",
      },
      {
        title: "Logical Operators",
        description:
          "<b>Description:</b> Combine or invert boolean values.<br><b>Values:</b> `&&` (Logical AND), `||` (Logical OR), `!` (Logical NOT).",
      },
      {
        title: "Nullish Coalescing Operator (??)",
        description:
          "<b>Description:</b> Returns the right-hand side operand when the left-hand side operand is `null` or `undefined`, otherwise returns the left-hand side operand. It's a way to provide a default value for nullish values.",
        code: `const name = null ?? "Guest"; // "Guest"\nconst age = 0 ?? 25; // 0`,
      },
      {
        title: "Optional Chaining Operator (?.)",
        description:
          "<b>Description:</b> Allows reading the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. It returns `undefined` if a reference is nullish (`null` or `undefined`).",
        code: `const user = { address: { street: '123 Main St' } };\nconst street = user?.address?.street; // "123 Main St"\nconst zip = user?.address?.zip; // undefined`,
      },
    ],
  },
  {
    id: "control-flow",
    category: "Control Flow",
    items: [
      {
        title: "If...Else",
        description:
          "<b>Description:</b> Executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.",
        code: `if (age > 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}`,
      },
      {
        title: "Switch Case",
        description:
          "<b>Description:</b> Selects one of many code blocks to be executed.",
        code: `switch (day) {\n  case 0:\n    text = "Sunday";\n    break;\n  default:\n    text = "Looking forward to the Weekend";\n}`,
      },
      {
        title: "For Loop",
        description:
          "<b>Description:</b> Loops through a block of code a number of times.",
        code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
      },
      {
        title: "While & Do...While Loop",
        description:
          "<b>Description:</b> `while` loops through a block of code as long as a specified condition is true. `do...while` will execute the code block once, before checking if the condition is true.",
        code: `let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}`,
      },
      {
        title: "For...of Loop",
        description:
          "<b>Description:</b> Loops through the values of an iterable object (like Array, String, Map, Set etc.). Cannot be used on plain objects.",
        code: `const cars = ["BMW", "Volvo", "Mini"];\nfor (let x of cars) {\n  console.log(x);\n}`,
      },
      {
        title: "For...in Loop",
        description:
          "<b>Description:</b> Loops through the properties (keys) of an object.",
        code: `const person = {fname:"John", lname:"Doe"};\nfor (let x in person) {\n  console.log(person[x]);\n}`,
      },
    ],
  },
  {
    id: "strings",
    category: "String Methods",
    items: [
      {
        title: "Searching",
        description:
          "<b>Description:</b> Find the position of a substring.<br>• <b>indexOf():</b> Returns the first index of a specified value.<br>• <b>lastIndexOf():</b> Returns the last index of a specified value.<br>• <b>search():</b> Searches for a match and returns the position.<br>• <b>includes():</b> Returns `true` if a string contains a specified value.",
        code: `let str = "Hello, world!";\nstr.indexOf("world"); // 7`,
      },
      {
        title: "Extracting",
        description:
          "<b>Description:</b> Get a part of a string.<br>• <b>slice(start, end):</b> Extracts a part of a string and returns a new string.<br>• <b>substring(start, end):</b> Similar to slice, but cannot accept negative indexes.<br>• <b>substr(start, length):</b> Similar to slice, but the second parameter specifies the length.",
        code: `let str = "Apple, Banana, Kiwi";\nstr.slice(7, 13); // "Banana"`,
      },
      {
        title: "Replacing",
        description:
          "<b>Description:</b> Replace a part of a string.<br>• <b>replace(searchValue, newValue):</b> Replaces a specified value with another value.<br>• <b>replaceAll(searchValue, newValue):</b> Replaces all occurrences of a specified value.",
        code: `let text = "Please visit Microsoft!";\nlet newText = text.replace("Microsoft", "W3Schools");`,
      },
      {
        title: "Case Conversion",
        description:
          "<b>Description:</b> Change the case of a string.<br>• <b>toUpperCase():</b> Converts a string to uppercase.<br>• <b>toLowerCase():</b> Converts a string to lowercase.",
        code: `let text1 = "Hello World!";\nlet text2 = text1.toUpperCase();`,
      },
      {
        title: "Trimming & Padding",
        description:
          "<b>Description:</b> Remove whitespace or add padding.<br>• <b>trim():</b> Removes whitespace from both ends.<br>• <b>trimStart() / trimEnd():</b> Removes whitespace from the start or end.<br>• <b>padStart(targetLength, padString):</b> Pads the start of a string.<br>• <b>padEnd(targetLength, padString):</b> Pads the end of a string.",
        code: `let text = "     Hello World!     ";\ntext.trim(); // "Hello World!"`,
      },
      {
        title: "Splitting",
        description:
          "<b>Description:</b> Convert a string to an array.<br>• <b>split(separator):</b> Splits a string into an array of substrings.",
        code: `let text = "a,b,c,d,e";\nconst myArray = text.split(",");`,
      },
    ],
  },
  {
    id: "numbers-math",
    category: "Numbers & Math",
    items: [
      {
        title: "Number Methods",
        description:
          "<b>Description:</b> Methods to format numbers.<br>• <b>toFixed(digits):</b> Formats a number with a specific number of digits to the right of the decimal.<br>• <b>toPrecision(length):</b> Formats a number to a specified length.",
        code: `let num = 5.56789;\nnum.toFixed(2); // "5.57"\nnum.toPrecision(3); // "5.57"`,
      },
      {
        title: "parseInt & parseFloat",
        description:
          "<b>Description:</b> Global functions to parse strings and return numbers.<br>• <b>parseInt():</b> Parses a string and returns an integer.<br>• <b>parseFloat():</b> Parses a string and returns a floating-point number.",
        code: `parseInt("10.33"); // 10\nparseFloat("10.33"); // 10.33`,
      },
      {
        title: "Math Properties",
        description:
          "<b>Description:</b> Static properties on the `Math` object.<br>• <b>Math.E:</b> Euler's number.<br>• <b>Math.PI:</b> PI.<br>• <b>Math.sqrt():</b> Square root.<br>• <b>Math.abs():</b> Absolute (positive) value.<br>• <b>Math.random():</b> Returns a random number between 0 and 1.<br>• <b>Math.floor():</b> Rounds a number DOWN to the nearest integer.<br>• <b>Math.ceil():</b> Rounds a number UP to the nearest integer.<br>• <b>Math.round():</b> Rounds a number to the nearest integer.",
        code: `Math.floor(Math.random() * 10); // Random integer from 0 to 9`,
      },
    ],
  },
  {
    id: "arrays",
    category: "Array Methods",
    items: [
      {
        title: "Adding/Removing Elements",
        description:
          "<b>Description:</b> Modify the contents of an array.<br>• <b>push():</b> Adds an element to the end.<br>• <b>pop():</b> Removes the last element.<br>• <b>shift():</b> Removes the first element.<br>• <b>unshift():</b> Adds an element to the beginning.",
        code: `const fruits = ["Banana", "Orange", "Apple"];\nfruits.push("Lemon");`,
      },
      {
        title: "Splicing & Slicing",
        description:
          "<b>Description:</b> Add/remove elements at any position or create a new array from a section.<br>• <b>splice(index, how many, item1, ...):</b> Adds/Removes elements from an array.<br>• <b>slice(start, end):</b> Creates a new array from a section of an existing array.",
        code: `const fruits = ["Banana", "Orange", "Apple"];\nfruits.splice(2, 0, "Lemon", "Kiwi");`,
      },
      {
        title: "Searching",
        description:
          "<b>Description:</b> Find elements in an array.<br>• <b>indexOf():</b> Returns the first index of an element.<br>• <b>lastIndexOf():</b> Returns the last index of an element.<br>• <b>includes():</b> Checks if an array contains a certain element.<br>• <b>find():</b> Returns the value of the first element that passes a test.<br>• <b>findIndex():</b> Returns the index of the first element that passes a test.",
        code: `const ages = [3, 10, 18, 20];\nconst adult = ages.find(age => age >= 18); // 18`,
      },
      {
        title: "forEach",
        description:
          "<b>Description:</b> Calls a function for each element.<br><b>Syntax:</b> `array.forEach((currentValue, index, arr) => { ... });`",
        code: `const numbers = [45, 4, 9];\nnumbers.forEach(num => console.log(num));`,
      },
      {
        title: "map",
        description:
          "<b>Description:</b> Creates a new array by performing a function on each element.<br><b>Syntax:</b> `array.map((currentValue, index, arr) => { return ... });`",
        code: `const numbers = [45, 4, 9];\nconst newNumbers = numbers.map(num => num * 2);`,
      },
      {
        title: "filter",
        description:
          "<b>Description:</b> Creates a new array with elements that pass a test.<br><b>Syntax:</b> `array.filter((currentValue, index, arr) => { return ... });`",
        code: `const ages = [32, 33, 16, 40];\nconst adults = ages.filter(age => age >= 18);`,
      },
      {
        title: "reduce",
        description:
          "<b>Description:</b> Reduces the array to a single value.<br><b>Syntax:</b> `array.reduce((accumulator, currentValue, index, arr) => { return ... }, initialValue);`",
        code: `const numbers = [45, 4, 9];\nconst sum = numbers.reduce((total, num) => total + num, 0);`,
      },
      {
        title: "Sorting",
        description:
          "<b>Description:</b> Sorts the elements of an array.<br>• <b>sort():</b> Sorts alphabetically by default.<br>• <b>sort(compareFunction):</b> For numeric sort, a compare function is needed.",
        code: `const points = [40, 100, 1, 5, 25, 10];\npoints.sort((a, b) => a - b);`,
      },
      {
        title: "join()",
        description:
          "<b>Description:</b> Joins all elements of an array into a string.<br><b>Syntax:</b> `array.join(separator)`",
        code: `const elements = ['Fire', 'Air', 'Water'];\nconsole.log(elements.join(' - '));\n// Expected output: "Fire - Air - Water"`,
      },
      {
        title: "Multi-dimensional Arrays & flat()",
        description:
          "<b>Description:</b> An array containing other arrays. `flat()` creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        code: `const myArr = [[1,2],[3,4],[5,6]];\nconst newArr = myArr.flat(); // [1, 2, 3, 4, 5, 6]`,
      },
      {
        title: "Array.from()",
        description:
          "<b>Description:</b> Creates a new, shallow-copied Array instance from an array-like or iterable object.",
        code: `const set = new Set(['foo', 'bar']);\nArray.from(set); // ['foo', 'bar']`,
      },
      {
        title: "Cloning",
        description:
          "<b>Description:</b> Create a copy of an array.<br>• <b>Spread Operator (`...`):</b> Creates a shallow copy.<br>• <b>structuredClone():</b> Creates a deep copy.",
        code: `const original = [{ a: 1 }];\nconst deepCopy = structuredClone(original);`,
      },
      {
        title: "Array Destructuring",
        description:
          "<b>Description:</b> A convenient way of extracting elements from arrays into distinct variables.",
        code: `const [a, b] = [10, 20];\nconsole.log(a); // 10`,
      },
    ],
  },
  {
    id: "objects",
    category: "Object Methods",
    items: [
      {
        title: "Creating Objects",
        description:
          "<b>Description:</b> Create an object using literal notation or the `new Object()` constructor.",
        code: `const person = {\n  firstName: "John",\n  lastName: "Doe"\n};`,
      },
      {
        title: "Destructuring",
        description:
          "<b>Description:</b> A convenient way of extracting properties from objects or elements from arrays into distinct variables.",
        code: `const { firstName, lastName } = person;`,
      },
      {
        title: "Object Methods",
        description:
          "<b>Description:</b> Static methods on the `Object` constructor.<br>• <b>Object.keys():</b> Returns an array of a given object's own enumerable property names.<br>• <b>Object.values():</b> Returns an array of a given object's own enumerable property values.<br>• <b>Object.entries():</b> Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.",
        code: `const keys = Object.keys(person); // ["firstName", "lastName"]`,
      },
      {
        title: "Advanced Object Properties",
        description:
          "<b>Description:</b> Control the behavior of object properties.<br>• <b>Object.defineProperty():</b> Defines a new property or modifies an existing one.<br>• <b>Object.getOwnPropertyDescriptor():</b> Returns a property descriptor for an own property.<br>• <b>writable, configurable, enumerable:</b> Property descriptors that define if a property can be changed, deleted, or looped over.",
        code: `Object.defineProperty(person, 'year', { value: 1990, writable: false });`,
      },
      {
        title: "Shallow vs Deep Copy",
        description:
          "<b>Description:</b><br>• <b>Shallow Copy:</b> Creates a new object, but if a property is a reference to another object, only the reference is copied.<br>• <b>Deep Copy:</b> Creates a new object and recursively copies all properties, including nested objects.",
        code: `// Shallow Copy\nconst personCopy = { ...person };\n\n// Deep Copy (using structuredClone)\nconst deepCopy = structuredClone(person);`,
      },
      {
        title: "Preventing Modifications",
        description:
          "<b>Description:</b> Control how an object can be modified.<br>• <b>Object.freeze():</b> Prevents any changes to an object.<br>• <b>Object.seal():</b> Prevents adding/deleting properties, but allows existing properties to be changed.<br>• <b>Object.preventExtensions():</b> Prevents adding new properties.",
        code: `const obj = { prop: 42 };\nObject.freeze(obj);`,
      },
    ],
  },
  {
    id: "sets-maps",
    category: "Sets & Maps",
    items: [
      {
        title: "Set",
        description:
          "<b>Description:</b> A collection of unique values. A value in the Set may only occur once.<br>• <b>new Set():</b> Creates a new Set.<br>• <b>add():</b> Adds a new element.<br>• <b>delete():</b> Removes an element.<br>• <b>has():</b> Returns `true` if a value exists.<br>• <b>size:</b> Returns the number of elements.",
        code: `const letters = new Set(["a", "b", "c"]);\nletters.add("d");`,
      },
      {
        title: "Map",
        description:
          "<b>Description:</b> Holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.<br>• <b>new Map():</b> Creates a new Map.<br>• <b>set():</b> Sets the value for a key.<br>• <b>get():</b> Gets the value for a key.<br>• <b>delete():</b> Removes a Map element.<br>• <b>has():</b> Returns `true` if a key exists.",
        code: `const fruits = new Map();\nfruits.set("apples", 500);`,
      },
    ],
  },
  {
    id: "functions",
    category: "Functions",
    items: [
      {
        title: "Function Declaration",
        description: "<b>Description:</b> A standard function definition.",
        code: `function myFunction(p1, p2) {\n  return p1 * p2;\n}`,
      },
      {
        title: "Function Expression",
        description:
          "<b>Description:</b> A function can also be defined as an expression and assigned to a variable.",
        code: `const myFunction = function(p1, p2) {\n  return p1 * p2;\n};`,
      },
      {
        title: "Arrow Function",
        description:
          "<b>Description:</b> A more concise syntax for writing functions. They do not have their own `this` context.",
        code: `const myFunction = (p1, p2) => p1 * p2;`,
      },
      {
        title: "IIFE",
        description:
          "<b>Description:</b> Immediately Invoked Function Expression. A function that is executed right after it is created. It's often used to avoid polluting the global scope.",
        code: `(function() {\n  console.log("I am an IIFE!");\n})();`,
      },
      {
        title: "Spread vs Rest Operators",
        description:
          "<b>Description:</b><br>• <b>Spread (`...`):</b> Expands an iterable (like an array) into individual elements.<br>• <b>Rest (`...`):</b> Collects multiple elements and condenses them into a single array.",
        code: `// Spread\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]\n\n// Rest\nfunction sum(...args) {\n  return args.reduce((total, num) => total + num, 0);\n}`,
      },
    ],
  },
  {
    id: "dates",
    category: "Date Object",
    items: [
      {
        title: "Creating Dates",
        description:
          "<b>Description:</b> Create a new date object with the `new Date()` constructor.",
        code: `const d = new Date();`,
      },
      {
        title: "Get Methods",
        description:
          "<b>Description:</b> Get information from a date object.<br>• <b>getFullYear():</b> Get the year as a four digit number (yyyy).<br>• <b>getMonth():</b> Get the month as a number (0-11).<br>• <b>getDate():</b> Get the day as a number (1-31).<br>• <b>getHours():</b> Get the hour (0-23).<br>• <b>getMinutes():</b> Get the minute (0-59).<br>• <b>getSeconds():</b> Get the second (0-59).<br>• <b>getTime():</b> Get the time (milliseconds since January 1, 1970).",
        code: `const d = new Date();\nconst year = d.getFullYear();`,
      },
      {
        title: "Set Methods",
        description:
          "<b>Description:</b> Set parts of a date.<br>• <b>setFullYear():</b> Set the year.<br>• <b>setMonth():</b> Set the month.<br>• <b>setDate():</b> Set the day.<br>• <b>setHours():</b> Set the hour (0-23).<br>• <b>setMinutes():</b> Set the minute (0-59).<br>• <b>setSeconds():</b> Set the second (0-59).",
        code: `const d = new Date();\nd.setFullYear(2020);`,
      },
      {
        title: "Date String Formats",
        description:
          "<b>Description:</b> Convert a Date object to a string.<br>• <b>toString():</b> Default conversion.<br>• <b>toDateString():</b> More readable, date-only format.<br>• <b>toISOString():</b> ISO 8601 standard format.<br>• <b>toLocaleString():</b> Browser's local format for date and time.<br>• <b>toLocaleDateString():</b> Browser's local format for date only.<br>• <b>toLocaleTimeString():</b> Browser's local format for time only.",
        code: `const d = new Date();\nd.toLocaleDateString(); // "7/26/2024" (example format)`,
      },
    ],
  },
  {
    id: "dom",
    category: "DOM Manipulation",
    items: [
      {
        title: "Accessing Elements",
        description:
          "<b>Description:</b> Get elements from the DOM.<br>• <b>getElementById():</b> Selects an element by its ID.<br>• <b>getElementsByClassName(), getElementsByTagName():</b> Selects elements by class or tag name.<br>• <b>querySelector():</b> Returns the first element that matches a specified CSS selector.<br>• <b>querySelectorAll():</b> Returns all elements that match a specified CSS selector.",
        code: `const myElement = document.getElementById("myId");`,
      },
      {
        title: "Creating & Adding Elements",
        description:
          "<b>Description:</b> Create new elements and add them to the DOM.<br>• <b>createElement():</b> Creates an element node.<br>• <b>appendChild():</b> Adds a node to the end of the list of children of a specified parent node.<br>• <b>prepend():</b> Inserts a set of Node objects or string objects before the first child of the Element.<br>• <b>insertBefore():</b> Inserts a node before a reference node.",
        code: `const para = document.createElement("p");\ndocument.body.appendChild(para);`,
      },
      {
        title: "Modifying Elements",
        description:
          "<b>Description:</b> Change the content and attributes of elements.<br>• <b>innerHTML:</b> Gets or sets the HTML content of an element.<br>• <b>innerText:</b> Renders text content of a node and its descendants.<br>• <b>textContent:</b> Gets or sets the text content of a node and its descendants.<br>• <b>setAttribute(), getAttribute(), removeAttribute():</b> Work with element attributes.",
        code: `myElement.setAttribute("class", "my-class");`,
      },
      {
        title: "Advanced DOM Insertion/Removal",
        description:
          "<b>Description:</b> More ways to manipulate the DOM.<br>• <b>replaceChild(new, old):</b> Replaces a child node with a new node.<br>• <b>remove():</b> Removes the element from the DOM.<br>• <b>insertAdjacentElement(position, element):</b> Inserts a given element node at a given position.<br>• <b>insertAdjacentHTML(position, text):</b> Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.",
        code: `myElement.remove();`,
      },
    ],
  },
  {
    id: "events",
    category: "Events",
    items: [
      {
        title: "Adding Event Listeners",
        description:
          '<b>Description:</b> Attach an event handler to an element.<br><b>Syntax:</b> `element.addEventListener("event", callbackFunction);`',
        code: `myElement.addEventListener("click", function() {\n  alert("Hello World!");\n});`,
      },
      {
        title: "Common Events",
        description:
          "<b>Description:</b><br>• <b>Mouse Events:</b> `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`, `contextmenu`.<br>• <b>Keyboard Events:</b> `keydown`, `keyup`, `keypress`.<br>• <b>Form Events:</b> `submit`, `change`, `focus`, `blur`, `input`.<br>• <b>Window Events:</b> `load`, `resize`, `scroll`.",
      },
      {
        title: "Event Object",
        description:
          "<b>Description:</b> When an event occurs, the browser creates an event object, which contains information about the event.<br>• <b>event.target:</b> The element that triggered the event.<br>• <b>event.currentTarget:</b> The element that the event listener is attached to.<br>• <b>event.preventDefault():</b> Prevents the default action of the event.<br>• <b>event.stopPropagation():</b> Stops the event from bubbling up.<br>• <b>event.key, event.code:</b> Information about the key pressed.<br>• <b>event.clientX, event.clientY:</b> The coordinates of the mouse pointer.<br>• <b>event.target.value, event.target.id, etc.:</b> Access properties of the target element.",
        code: `myElement.addEventListener("click", (event) => {\n  console.log(event.target.value);\n});`,
      },
      {
        title: "Event Bubbling & Capturing",
        description:
          "<b>Description:</b><br>• <b>Bubbling:</b> The event is first captured and handled by the innermost element and then propagated to outer elements.<br>• <b>Capturing:</b> The event is first captured by the outermost element and propagated to the inner elements.",
      },
    ],
  },
  {
    id: "async",
    category: "Asynchronous JavaScript",
    items: [
      {
        title: "setTimeout & setInterval",
        description:
          "<b>Description:</b><br>• <b>setTimeout():</b> Executes a function after waiting a specified number of milliseconds.<br>• <b>setInterval():</b> Repeats a given function at every given time-interval.<br><b>Syntax:</b> `setTimeout(callbackFunction, delayInMs);`",
        code: `const timeoutId = setTimeout(() => {\n  console.log("Delayed for 1 second.");\n}, 1000);\nclearTimeout(timeoutId);`,
      },
      {
        title: "Callback Hell",
        description:
          "<b>Description:</b> A situation where multiple nested callbacks make the code hard to read and maintain. Promises and async/await are used to solve this.",
      },
      {
        title: "Promises",
        description:
          "<b>Description:</b> An object representing the eventual completion or failure of an asynchronous operation.<br>• <b>.then():</b> Called when the promise is fulfilled.<br>• <b>.catch():</b> Called when the promise is rejected.<br>• <b>.finally():</b> Called regardless of the outcome.",
        code: `myPromise.then(result => { ... }).catch(error => { ... });`,
      },
      {
        title: "Async/Await",
        description:
          "<b>Description:</b> A more modern way to handle promises, making asynchronous code look and behave more like synchronous code.",
        code: `async function myFunc() {\n  try {\n    let result = await myPromise;\n  } catch (error) {\n    // handle error\n  }\n}`,
      },
      {
        title: "response.json()",
        description:
          "<b>Description:</b> When using the Fetch API, the response is a Stream. `response.json()` is an asynchronous method that reads the stream to completion and parses the body text as JSON.",
      },
    ],
  },
  {
    id: "storage-json",
    category: "Storage & JSON",
    items: [
      {
        title: "Local Storage",
        description:
          "<b>Description:</b> A web storage object that stores data with no expiration date.<br>• <b>setItem(key, value):</b> Stores a key/value pair.<br>• <b>getItem(key):</b> Retrieves the value for a given key.<br>• <b>removeItem(key):</b> Removes a key/value pair.",
        code: `localStorage.setItem("name", "John");`,
      },
      {
        title: "JSON",
        description:
          "<b>Description:</b> JavaScript Object Notation, a lightweight format for storing and transporting data.<br>• <b>JSON.stringify():</b> Converts a JavaScript object to a JSON string.<br>• <b>JSON.parse():</b> Parses a JSON string, constructing the JavaScript value or object described by the string.",
        code: `const myJSON = JSON.stringify(myObj);`,
      },
      {
        title: "FormData",
        description:
          "<b>Description:</b> An interface to construct a set of key/value pairs representing form fields and their values.<br>• <b>new FormData(formElement):</b> Creates a new FormData object.<br>• <b>append(name, value):</b> Appends a new value.<br>• <b>delete(name):</b> Deletes a key.<br>• <b>get(name):</b> Gets the first value.<br>• <b>getAll(name):</b> Gets all values.<br>• <b>has(name):</b> Checks for a key.<br>• <b>set(name, value):</b> Sets/replaces a value.",
        code: `const formData = new FormData(myForm);\nformData.append('username', 'JohnDoe');`,
      },
    ],
  },
  {
    id: "advanced-concepts",
    category: "Advanced Concepts",
    items: [
      {
        title: "Debouncing",
        description:
          "<b>Description:</b> A technique to limit the rate at which a function gets called. It groups a sudden burst of events (like keystrokes) into a single one.<br><b>Purpose:</b> Improves performance by preventing expensive operations (like API calls) from running too frequently. It only executes the function after a certain period of inactivity.<br><b>Syntax:</b> A debounced function is created by a higher-order function that takes the original function and a delay time as arguments.",
        code: `function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\nconst debouncedSearch = debounce(() => console.log("Searching..."), 500);`,
      },
      {
        title: "Throttling",
        description:
          "<b>Description:</b> A technique to ensure that a function is called at most once in a specified time interval, no matter how many times the event is triggered.<br><b>Purpose:</b> Useful for controlling the rate of events that fire continuously, like scrolling, to prevent performance issues.<br><b>Syntax:</b> Implemented using a higher-order function.",
        code: `function throttle(func, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n\nconst throttledScroll = throttle(() => console.log("Scrolled!"), 1000);`,
      },
      {
        title: "Memoization",
        description:
          "<b>Description:</b> An optimization technique that speeds up functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again.<br><b>Purpose:</b> Avoids re-computing results for the same inputs, improving performance for computationally heavy functions.<br><b>Syntax:</b> A memoization function wraps the original function, using a cache to store results.",
        code: `function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) return cache[key];\n    const result = fn(...args);\n    cache[key] = result;\n    return result;\n  };\n}`,
      },
      {
        title: "Currying",
        description:
          "<b>Description:</b> The process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.<br><b>Purpose:</b> Creates more reusable and specialized functions by allowing you to 'pre-load' a function with some of its arguments.<br><b>Syntax:</b> `curriedSum(1)(2)(3)` instead of `sum(1, 2, 3)`.",
        code: `const curriedAdd = (a) => (b) => (c) => a + b + c;\nconst add5 = curriedAdd(5);\nconsole.log(add5(10)(3)); // 18`,
      },
      {
        title: "Proxy & Reflect",
        description:
          "<b>Description:</b><br>• <b>Proxy:</b> An object that wraps another object and intercepts fundamental operations (like getting/setting properties).<br>• <b>Reflect:</b> A built-in object that provides methods for these operations, often used with Proxies.<br><b>Purpose:</b> Allows creating 'traps' for property access, enabling powerful meta-programming for validation, logging, etc.<br><b>Syntax:</b> `new Proxy(target, handler)`.",
        code: `const target = { message: "hello" };\nconst handler = {\n  get(target, prop) {\n    console.log(\`Getting property "\${prop}"\`);\n    return Reflect.get(...arguments);\n  }\n};\nconst proxy = new Proxy(target, handler);`,
      },
      {
        title: "Promisification",
        description:
          "<b>Description:</b> The process of converting a function that takes a callback into a function that returns a promise.<br><b>Purpose:</b> To modernize old, callback-based asynchronous APIs so they can be used with `async/await` and `.then()`/`.catch()`.<br><b>Syntax:</b> A wrapper function is created that returns a `new Promise`.",
        code: `function promisify(fn) {\n  return function(...args) {\n    return new Promise((resolve, reject) => {\n      fn(...args, (err, result) => {\n        if (err) return reject(err);\n        resolve(result);\n      });\n    });\n  };\n}`,
      },
      {
        title: "Generator Function & Yield",
        description:
          "<b>Description:</b><br>• <b>Generator (`function*`):</b> A function that can be paused and resumed, producing a sequence of values.<br>• <b>`yield` keyword:</b> Pauses the generator and returns a value.<br><b>Purpose:</b> Useful for creating iterators, handling infinite data streams, and managing async flows.<br><b>Syntax:</b> A generator returns an iterator object with a `.next()` method.",
        code: `function* numberGenerator() {\n  yield 1;\n  yield 2;\n}\nconst gen = numberGenerator();\nconsole.log(gen.next()); // { value: 1, done: false }`,
      },
      {
        title: "Immutability",
        description:
          "<b>Description:</b> The principle that data (objects, arrays) should not be changed after creation. Instead, create a new copy with the changes.<br><b>Purpose:</b> Makes code more predictable, prevents unintended side effects, and is a core concept in state management (e.g., Redux).<br><b>Syntax:</b> Use methods that return new arrays/objects (`.map`, spread syntax) instead of ones that modify in place (`.push`, `.splice`).",
        code: `// Good: Immutability\nconst user = { name: "John" };\nconst updatedUser = { ...user, age: 30 }; // Creates a new object`,
      },
      {
        title: "Function Composition",
        description:
          "<b>Description:</b> The process of combining two or more functions to produce a new function, where the output of one is the input of the next.<br><b>Purpose:</b> To build complex functionality from simple, reusable building blocks.<br><b>Syntax:</b> `compose(f, g)(x)` is equivalent to `f(g(x))`.",
        code: `const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);\nconst toUpper = (str) => str.toUpperCase();\nconst exclaim = (str) => \`\${str}!\`;\nconst shout = compose(exclaim, toUpper);\nconsole.log(shout("hello")); // "HELLO!"`,
      },
      {
        title: "Mutation Observer",
        description:
          "<b>Description:</b> A Web API that provides the ability to watch for changes being made to the DOM tree.<br><b>Purpose:</b> To react to DOM modifications (e.g., adding/removing nodes) without expensive, manual polling.<br><b>Syntax:</b> You create an observer instance and call its `.observe()` method on a target node.",
        code: `const targetNode = document.getElementById('some-element');\nconst config = { childList: true };\nconst observer = new MutationObserver((mutations) => { /* ... */ });\nobserver.observe(targetNode, config);`,
      },
      {
        title: "Garbage Collection",
        description:
          "<b>Description:</b> An automatic memory management process where the JavaScript engine finds and frees up memory that is no longer in use.<br><b>Purpose:</b> To prevent memory leaks by automatically reclaiming memory occupied by objects that are no longer reachable.<br><b>How it works:</b> Modern engines use a 'mark-and-sweep' algorithm to identify unreachable objects.",
        code: `// Garbage collection is automatic.\nlet user = { name: "John" };\nuser = null; // The object is now eligible for garbage collection.`,
      },
      {
        title: "Event Emitter",
        description:
          "<b>Description:</b> A design pattern that implements the publish/subscribe model, allowing objects to listen for (`on`) and emit named events.<br><b>Purpose:</b> Decouples different parts of an application. An object can emit an event without knowing which other objects are listening.<br><b>Syntax:</b> Typically a class with `on()`, `off()`, and `emit()` methods.",
        code: `class Emitter {\n  constructor() { this.events = {}; }\n  on(e, cb) { (this.events[e]||(this.events[e]=[])).push(cb); }\n  emit(e, ...d) { (this.events[e]||[]).forEach(cb=>cb(...d)); }\n}\nconst emitter = new Emitter();\nemitter.on('greet', (n) => console.log(\`Hi, \${n}\`));\nemitter.emit('greet', 'Al');`,
      },
    ],
  },
  {
    id: "important-qna",
    category: "Important Q&A",
    items: [
      {
        title: "Proxy Server (in Dev)",
        description:
          "<b>Description:</b> An intermediary server often used locally to solve CORS issues.<br><b>Purpose:</b> When your frontend (`localhost:3000`) calls an API on a different domain, the browser blocks it. A proxy forwards the request from your local server, bypassing this restriction.<br><b>Syntax:</b> Configured in tools like Vite (`vite.config.js`) or Create React App (`package.json`).",
        code: `// Example in vite.config.js\nexport default {\n  server: {\n    proxy: {\n      '/api': 'http://api.example.com',\n    }\n  }\n}`,
      },
      {
        title: "Prototype & Prototype Chaining",
        description:
          "<b>Answer:</b> Every JavaScript object has a hidden `[[Prototype]]` property that's either another object or `null`. This forms a chain. When you try to access a property, JavaScript looks on the object, then its prototype, and so on, until it finds the property or reaches the end of the chain.",
      },
      {
        title: "Why not use index as a key in React?",
        description:
          "<b>Answer:</b> Keys help React identify which items have changed, are added, or are removed. If the order of items in a list changes, using the index as a key can lead to bugs and performance issues because React will associate the wrong data with the wrong component instance.",
      },
      {
        title: "What is Hoisting?",
        description:
          "<b>Answer:</b> Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` declarations are hoisted but not initialized (they are in a 'temporal dead zone'). Function declarations are hoisted and fully initialized.",
      },
      {
        title: "How does JavaScript memory work?",
        description:
          "<b>Answer:</b> JavaScript uses two main places to store data in memory:<br>• <b>Stack:</b> For static data, primitive types (String, Number, etc.), and function call references. It's a LIFO (Last-In, First-Out) data structure with a fixed size.<br>• <b>Heap:</b> For dynamic data, objects, and arrays. It's a large, unstructured region of memory.",
      },
      {
        title: "How does JavaScript work?",
        description:
          "<b>Answer:</b> JavaScript is single-threaded and uses an event loop to handle asynchronous operations.<br>1. <b>Call Stack:</b> Where functions are executed.<br>2. <b>Web APIs:</b> Asynchronous operations (like `setTimeout`) are handed off to the browser's Web APIs.<br>3. <b>Callback Queue:</b> When a Web API finishes, its callback is placed here.<br>4. <b>Microtask Queue:</b> Has higher priority for Promise callbacks (`.then`).<br>5. <b>Event Loop:</b> When the Call Stack is empty, it moves tasks from the queues (Microtask first) to the Call Stack for execution.",
      },
    ],
  },
  {
    id: "best-practices",
    category: "Best Practices & Accessibility",
    items: [
      {
        title: "Use Strict Mode",
        description:
          '<b>Description:</b> `"use strict";` enables strict mode, which catches common coding mistakes and "unsafe" actions.',
      },
      {
        title: "Avoid Global Variables",
        description:
          "<b>Description:</b> Minimize the use of global variables to prevent conflicts between scripts.",
      },
      {
        title: "Comment Your Code",
        description:
          "<b>Description:</b> Write clear, concise comments to explain complex parts of your code.",
      },
      {
        title: "Accessibility (A11y)",
        description:
          "<b>Description:</b> Write JavaScript with accessibility in mind.<br>• <b>Manage Focus:</b> Ensure that focus is managed logically, especially in dynamic applications.<br>• <b>Keyboard Navigation:</b> Make sure all interactive elements are accessible via the keyboard.<br>• <b>ARIA Attributes:</b> Use JavaScript to dynamically update ARIA attributes (e.g., `aria-hidden`, `aria-expanded`).",
      },
    ],
  },
];

// The main component that you will export
export default function JavaScript() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-neutral-100">
            The Definitive JavaScript Cheat Sheet
          </h1>
          <p className="mt-2 text-lg text-cyan-400">
            Your complete and professional guide to JavaScript.
          </p>
        </header>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <aside className="mb-8 lg:col-span-3 lg:mb-0">
            <div className="sidebar sticky top-25 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold dark:border-gray-600">
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-2 text-sm">
                  {jsData.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        onClick={(e) => handleLinkClick(e, category.id)}
                        className="transition-colors hover:text-cyan-400"
                      >
                        {category.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8 lg:col-span-9">
            {jsData.map((categoryData) => (
              <div
                key={categoryData.id}
                id={categoryData.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-8 border-b-2 border-cyan-500 pb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {categoryData.items.map((item, itemIndex) => (
                    <CheatSheetCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description || ""}
                      code={item.code}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
