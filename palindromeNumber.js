// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// Extra: finish without converting number to string 

var isPalindrome = function(x) {
    let num = x;
    let reverse = 0; 
    
    while (num > 0) {
        const lastDigit = num % 10;
        reverse = (reverse * 10) + lastDigit;
        num = parseInt(num/10);
    }

    if ( x === reverse && x >= 0) {
        return true;
    }
    return false;
};

console.log(isPalindrome(10));