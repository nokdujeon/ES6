// An array is a special variable, which can hold more than one value:

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.
// Example
const values = ['Saab', 'Volvo', 'BMW'];
// It is a common practice to declare arrays with the const keyword.

// A declaration can span multiple lines:
// Example
const carMakers = [
    'Saab',
    'Volvo',
    'BMW',
    'Benz',
    'Audi',
    'Volkswagen',
    'Kia',
    'Hyundai',
    'Toyota',
    'Honda',
];

// You can also create an array, and then provide the elements:
// Example
const autoMakers = [];
autoMakers[0] = 'Saab';
autoMakers[1] = 'Volvo';
autoMakers[2] = 'BMW';

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:
// Example
const vehicles = new Array('Saab', 'Volvo', 'BMW');

// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.

// Why Use Arrays?
// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Accessing Array Elements
// You access an array element by referring to the index number:
// Example
// Accessing the First Array Element
carMakers[0];
// Accessing the Last Array Element
carMakers[carMakers.length - 1];

// Changing an Array Element
// This statement changes the value of the first element in cars:
// Example
carMakers[0] = 'Opel';

// The built-in Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:
// Example
carMakers.length; // The `length` property of an array returns the length of an array (the number of array elements).
carMakers.sort(); // Sorts the array
