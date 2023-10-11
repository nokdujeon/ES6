const global_arrays = {
    numbers: [1, 90, 78, 3, 22, 187, 11, 21],
    fruits: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'],
    animals: ['Eagle', 'Bison', 'Camel', 'Duck', 'Bison', 'Cat', 'Dog'],
    userList: [
        { name: 'Mike', age: 30 },
        { name: 'Jane', age: 27 },
        { name: 'Tom', age: 10 },
    ],
    inventory: [
        { name: 'Apples', quantity: 2 },
        { name: 'Cherries', quantity: 5 },
    ],
};

const global_strings = {
    desc: 'This is a description for global object.',
    company: 'Mozilla',
    name: 'Mike',
    greeting: '   Hello world!   ',
    fruits: ['01. Orange', '02. Apple', '03. Kiwi', '04. Pear'],
    sentence:
        'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
};

module.exports = { global_arrays };
module.exports = { global_strings };
