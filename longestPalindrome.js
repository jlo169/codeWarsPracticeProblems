// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
    const str = s.split('').sort();
    let total = 0;

    for (let i = 0; i < str.length; i) {
        if (str[i] === str[i+1]) {
            total += 2;
            str.splice(i, 2);
        } else {
            i++;
        }
    }

    if (str[0]) {
        return ++total;
    }
    return total;
};

console.log(longestPalindrome('bb'))