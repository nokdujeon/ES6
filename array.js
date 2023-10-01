Array;

// An array is a special variable, which can hold more than one value:
// Example
const values = ['Saab', 'Volvo', 'BMW'];

// Why Use Arrays?
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// Example
print(values[0]);

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Example
const items = [item1, item2, item3];
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
