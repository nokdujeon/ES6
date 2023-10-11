const Big = require('big.js');

// Fixed - Point Number Representation vs.Floating - Point Number Representation.

// ---------------------------------------------------------------
// | 32 bits                                                     |
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// |1| 15(-2¹⁵ ~ 2¹⁵-1)          | 16(2¹⁶-1)                     |
// ---------------------------------------------------------------
// |S| integer                   | decimal                       |
// ---------------------------------------------------------------
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// |1|0~2⁷-1, 2⁷~2⁸-1| 23(2¹⁶-1)                                 |
// ---------------------------------------------------------------
// |S| exponent      | mantissa                                  |
// ---------------------------------------------------------------
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// ---------------------------------------------------------------

// 1. Negative integer? or Positive integer?
// 2. Negative integer
// 2.1. Make the number positive number using abs()
// 2.2. The positive number - 1
// 2.2. Convert the decimal number to binary number
// 2.2. Excute flipZerosAndOnes()
// 3. Positive integer
// 3.1 convert the decimal number to binary nuimber

// 00001010 : 10 -> flip
// 11110101
//        1
// 11110110 : -10

// -10 -> 10 using Math.abs()
// 00001010 : 10
// 00001001: 9(10-1) -> flip
// 11110110: -10

function convertIntegerToBinary(integer) {
    const MAX_BIT_SIZE = 32;

    function convert(integer) {
        result = Math.floor(integer / 2);
        return result >= 1
            ? convert(result) + (integer % 2).toString()
            : integer.toString();
    }

    function flipZerosAndOnes(binaryString) {
        // Use regular expressions to replace 0s with 1s and vice versa
        return binaryString
            .replace(/0/g, 'x')
            .replace(/1/g, '0')
            .replace(/x/g, '1');
    }

    return integer < 0
        ? flipZerosAndOnes(convert(Math.abs(integer) - 1)).padStart(
              MAX_BIT_SIZE,
              '1'
          )
        : convert(integer).padStart(MAX_BIT_SIZE, '0');
}

function floatingPointInaccurancies() {
    function warning() {
        console.log(
            '0.1 + 0.2 == 0.3 is',
            0.1 + 0.2 == 0.3,
            'because',
            0.1 + 0.2,
            '= 0.1 + 0.2'
        );
    }

    function useLibrary() {
        // Use big.js
        console.log(
            'new Big(0.1).plus(new Big(0.2)).eq(0.3) is',
            new Big(0.1).plus(new Big(0.2)).eq(0.3)
        );
    }
}
