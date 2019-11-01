// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Note: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// /**
//  * @param {number} x
//  * @return {number}
//  */

var reverse = function(x) {
    if ( x > 2147483647 || x < -2147483648) {
        return 0;
    }

    let num = x;
    let reverse = 0;
    let negative = false;

    if (num < 0) {
        negative = true;
        num *= -1;
    }

    while (num > 0) {
        const lastDigit = num % 10;
        reverse = (reverse * 10) + lastDigit;
        num = parseInt(num/10);
    }

    if ( reverse > 2147483647 || reverse < -2147483648) {
        return 0;
    }

    if (negative) {
        reverse *= -1;
        return reverse;
    }
    return reverse;
};

console.log(reverse(1534236469))