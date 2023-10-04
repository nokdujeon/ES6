function primitive() {
    // In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:
    // 1. string
    // 2. number
    // 3. bigint
    // 4. boolean

    // 5. undefined
    function data_type_undefined() {
        // undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
        // A variable without a value, has the value 'undefined'.
        // The type is also 'undefined'.

        let car; //create a variable but assign it no value
        console.log(`car's value is ${car}`); //logs "x's value is undefined"

        // Any variable can be emptied, by setting the value to 'undefined'. The type will also be 'undefined'.
        car = undefined; // Value is undefined, type is undefined.

        let x = 1; // return 'undefined.' if a statement has no return value.
    }

    // 6. symbol
    // 7. null
    function data_type_null() {
        // The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

        // Description
        // The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.

        // foo is known to exist now but it has no type or value:
        const foo = null;
        foo; //null

        if (typeof null == typeof foo) {
            console.log(typeof null, typeof foo); // object object
        }

        if (null === foo) {
            console.log(`null === foo is true`); // null null
        }
    }
}

function differenceBetweenNullAndUndefined() {
    // When checking for null or undefined, beware of the differences between equality(==) and identity(===) operators, as the former performs type-conversion.
    typeof null; // "object" (not "null" for legacy reasons)
    typeof undefined; // "undefined"
    null === undefined; // false
    null == undefined; // true
    null === null; // true
    null == null; // true
    !null; // true
    Number.isNaN(1 + null); // (1), false
    Number.isNaN(1 + undefined); // (NaN), true
}

function empty_value() {
    // An empty value has nothing to do with undefined.
    // An empty string has both a legal value and a type.
    let car = ''; // The value is '', the typeof is "string".

    console.log(car); // ''
    console.log(typeof car); // string
}
