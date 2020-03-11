// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// /**
//  * @param {number} n
//  * @return {string[]}
//  */

var generateParenthesis = function(n) {
  const output = [];
  
  const recursive = (open, close, str) => {
    if (close === n) {
      output.push(str);
      return;
    };
    
    if (open < n) recursive(open + 1, close, str + '(');
    if (close < open) recursive(open, close + 1, str + ')');
  };
  
  recursive(1, 0, '(');
  return output;
};