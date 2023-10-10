const { strings } = require('./global_variables');

// The 'String' object is used to represent and manipulate a sequence of characters.

function create() {
    // Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
    const strPrimitiveLiteral = 'A string is primitive.';
    const strPrimitive_1 = String(1); // Coerced into the string primitive '1'
    const strPrimitive_true = String(true); // Coerced into the string primitive 'true'
    const strObject = new String('A string is an object.'); // String with new returns a string wrapper object.

    function differencesBetweenPrimitivesAndObjects() {
        console.log(typeof strPrimitiveLiteral); // "string"
        console.log(typeof strPrimitive_1); // "string"
        console.log(typeof strPrimitive_true); // "string"
        console.log(typeof strObject); // "object"

        // String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:
        const s1 = '2 + 2'; // creates a string primitive
        const s2 = new String('2 + 2'); // creates a String object
        console.log(eval(s1)); // returns the number 4
        console.log(eval(s2)); // returns the string "2 + 2"
    }

    function doNotCreateStringsObjects() {
        // The new keyword complicates the code and slows down execution speed.
        // String objects can produce unexpected results:

        function stringObjectCannotBeCompared() {
            let a = new String('John');
            let b = new String('John');
            a == b; // false

            let c = new String('John');
            let d = new String('John');
            c === d; // false
        }
    }
}

function access() {
    function useCharAt() {
        console.log(strings.fruits[0].charAt(1)); // gives value '1'
        console.log(typeof strings.fruits[0].charAt(1)); // gives value '1'
    }

    function treatStringAsArray() {
        // Treat the string as an array-like object, where individual characters correspond to a numerical index:
        console.log(strings.fruits[0][1]); // gives value '1'
        console.log(typeof strings.fruits[0][1]); // gives value '1'

        // When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable.
    }
}

function coercion() {
    // Strings are returned as- is.
    //     - undefined turns into "undefined".
    //     - null turns into "null".
    //     - true turns into "true"; false turns into "false".
    //     - Numbers are converted with the same algorithm as toString(10).
    //     - BigInts are converted with the same algorithm as toString(10).
    //     - Symbols throw a TypeError.
    //     - Objects are first converted to a primitive by calling its[@@toPrimitive]()(with "string" as hint), toString(), and valueOf() methods, in that order.The resulting primitive is then converted to a string.

    let result = 'Hi' + 1 + true; // Convert 1(number) to '1'(string), convert true(boolean) to 'true'(string).
    console.log(result); // Hi1true
    console.log(typeof result); // string

    result += null; // Convert null(object) to 'null'(string).
    result += undefined; // Convert undefined(undefined) to 'undefined'(string).
    console.log(result); // Hi1truenullundefined
    console.log(typeof result); // string
}
