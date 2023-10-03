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

function explainObject() {
    // An object is a collection of unordered properties, and a property is an association between a name(also called a key) and a value.
    // A JavaScript object is a data structure that stores a collection of properties.

    const objectVariable = {
        // Objects are variables too. But objects can contain many values.
        // Tshis code assigns many values ('Bruce Wayne', 33) to a variable named variable:
        fullName: 'Bruce Wayne',
        age: 33,
        // The values are written as name:value pairs(name and value separated by a colon).
    };

    function create() {
        function useLiterals() {
            const objectUsingLiterals = {
                // name: value, //  name_1: value_1, ... , name_n: value_n
                // The name: values pairs in JavaScript objects are called properties:
                // property, ... , property,
            };
        }
    }

    function explainProperties() {
        // A JavaScript property is a member of an object that associates a key with a value.
        // Type of key of property should be string or Symbol.
        // A property's value can be a function, in which case the property is known as a method.

        // A property consists of the following parts:
        // 1) A name (also called a key), which is either a string or a symbol.
        const names = [];

        // 2) A value, which can be any JavaScript value. A property that has a function as its value may also be called a method.
        const values = [];

        // 3) Some attributes, which specify how the property can be read and written. A property may have the `configurable`, `enumerable`, and `writable` attributes.

        function shortenProperties() {
            const name = 'Mango';
            const price = 100;

            const favoriteFruit = {
                name, // name: name
                price, // price: price
                country: 'Korea',
            };
        }

        function accessProperties() {
            // Accessing Properties
            objectVariable.fullName; // 'Bruce Wayne'
            objectVariable['age']; // 33
        }

        function addNewProperties() {
            // Adding New Properties
            objectVariable.gender = 'male';
            objectVariable['hairColor'] = 'black';
        }

        function deleteProperties() {
            // Deleting Properties
            delete objectVariable.hairColor;
            delete objectVariable['gender'];
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

        function haveMethods() {
            // Objects can also have methods.
            // Methods are actions that can be performed on objects.
            // Methods are stored in properties as function definitions.

            function assignMethodToProperty() {
                const exampleObject = {
                    fullName: 'Bruce Wayne',
                    age: 'Unknown',
                    fly: function () {
                        // ES5 style
                        console.log(`${this.fullName} can't fly!`);
                    },
                    run() {
                        // ES6+ style
                        console.log(`${this.fullName} can run.`);
                    },
                    swim: () => console.log(`${this.fullName} can swim!`),
                    // fly: () => false, // SyntaxError
                    // fly = () => false, // SyntaxError
                };

                function shouldNotUseArrowFunction() {
                    // Arrow function should not be used as methods.
                    // fly: () => console.log(`${this.name} can't fly!`),
                    // undefined can't fly! this means window in browser or global in node.js
                    exampleObject.swim();
                }

                function showExamples() {
                    exampleObject.fly();
                    exampleObject.run();
                }
            }
        }
    }
}
