// Real Life Objects, Properties, and Methods
// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:

// Object      Properties              Methods
// A car       car.maker = Benz        car.startEngine()
//             car.model = E350        car.drive()
//             car.color = black       car.brake()
//             car.weight = 1800kg     car.stopEngine()

// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

function object() {
    // An object is a collection of unordered properties, and a property is an association between a name(also called a key) and a value.
    // A JavaScript object is a data structure that stores a collection of properties.

    const batman = {
        // Objects are variables too. But objects can contain many values.
        // Tshis code assigns many values ('Bruce Wayne', 33) to a variable named variable:
        name: 'Bruce Wayne',
        age: 33,
        // The values are written as name:value pairs(name and value separated by a colon).
    };

    function create() {
        function useLiterals() {
            const object = {
                key: value, //  key_1: value_1, ... , key_n: value_n
                // The name: values pairs in JavaScript objects are called properties:
                // property, ... , property,
            };
        }
    }

    function properties() {
        // A JavaScript property is a member of an object that associates a key with a value.
        // Type of key of property should be string or Symbol.
        // A property's value can be a function, in which case the property is known as a method.

        // A property consists of the following parts:
        function name() {
            // 1) A name (also called a key), which is either a string or a symbol.
        }
        function value() {
            // 2) A value, which can be any JavaScript value. A property that has a function as its value may also be called a method.
        }
        // 3) Some attributes, which specify how the property can be read and written. A property may have the configurable, enumerable, and writable attributes.

        function accessProperties() {
            // Accessing Object Properties
            batman.name; // 'Bruce Wayne'
            batman['age']; // 33
        }

        function addNewProperties() {
            // Adding New Properties
            batman.gender = 'male';
            batman['hairColor'] = 'black';
        }

        function deleteProperties() {
            // Deleting Properties
            delete batman.hairColor;
            delete batman['gender'];
            // The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
        }

        function loopThroughProperties() {
            const person = {
                firstName: 'John',
                lastName: 'Doe',
                age: 25,
            };

            // Looping object property values:
            for (let key in person) {
                person[key];
                console.log(`key is ${key}`);
                console.log(`person[${key}] is ${person[key]}`);
            }
        }
    }
}
