const { arrays } = require('./global_variables');

// An array is a special variable, which can hold more than one value.
// Why Use Arrays? An array can hold many values under a single name, and you can access the values by referring to an index number.

function createArray() {
    // Using an array literal is the easiest way to create a JavaScript Array.
    const values = ['Saab', 'Volvo', 'BMW'];
    // It is a common practice to declare arrays with the const keyword.

    // A declaration can span multiple lines:
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
    const autoMakers = [];
    autoMakers[0] = 'Saab';
    autoMakers[1] = 'Volvo';
    autoMakers[2] = 'BMW';

    // Using the JavaScript Keyword new
    // The following example also creates an Array, and assigns values to it:
    const vehicleMakers = new Array('Saab', 'Volvo', 'BMW');

    // The two examples above do exactly the same.
    // There is no need to use new Array().
    // For simplicity, readability and execution speed, use the array literal method.
}

function accessArrayElement() {
    // You access an array element by referring to the index number:
    // Accessing the First Array Element
    arrays.animals[0];
    // Accessing the Last Array Element
    arrays.animals[arrays.animals.length - 1];
}

function changeArrayElement() {
    // This statement changes the value of the first element in animals:
    arrays.animals[1] = 'Pig';
}

function builtinArrayPropertiesAndMethods() {
    // The real strength of JavaScript arrays are the built-in array properties and methods:
    arrays.animals.length; // The `length` property of an array returns the length of an array (the number of array elements).
    arrays.animals.sort(); // Sorts the array
}
