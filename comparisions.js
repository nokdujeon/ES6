function compare() {
    function stringTostring() {
        console.log('101' < '2' ? true : false); // true: '0' < '1' < '2'
        console.log('abc' < 'bc' ? true : false); // true: 'a' < 'b' < 'c'
    }

    function stringToNumber() {
        // Convert '101'(string) to 101(number).
        if ('101' > 200) {
            console.log(true); // 101 < 200
        }
    }

    function nullAndUndefined() {
        // There’s a non - intuitive behavior when null or undefined are compared to other values.
        // For a strict equality check ===
        // These values are different, because each of them is a different type.
        console.log(null === undefined); // false

        //  For a non - strict check ==
        // There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
        console.log(null == undefined); // true

        // For maths and other comparisons < > <= >=
        // null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

        function nullVSNumber0() {
            alert(null > 0); // (1) false: Conversion
            alert(null == 0); // (2) false: No conversion
            alert(null >= 0); // (3) true: Conversion

            // Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

            // The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

            // On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
        }

        function incomparableUndefined() {
            // The value undefined shouldn’t be compared to other values:
            alert(undefined > 0); // false (1)
            alert(undefined < 0); // false (2)
            alert(undefined == 0); // false (3)

            // Why does it dislike zero so much ? Always false!
            // We get these results because:
            // - Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
            // - The equality check (3) returns false because undefined only equals null, undefined, and no other value.
        }

        function avoidProblems() {
            // Why did we go over these examples ? Should we remember these peculiarities all the time ? Well, not really.Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:
            //     - Treat any comparison with undefined / null except the strict equality === with exceptional care.
            //     - Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
        }
    }
}
