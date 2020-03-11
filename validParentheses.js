// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

var isValid = function(s) {
  if (!s) true;
  const brackets = [];
  const openClose = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      brackets.push(s[i]);
    } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      const end = brackets.length - 1;
      if (brackets[end] === openClose[s[i]]) {
        brackets.pop()
      } else {
        return false;
      }
    }
  }
  if (brackets.length) {
    return false;
  } else {
    return true;
  }
};

// if (s.length === 0) return true
// if (s.length === 1) return false
// if (s.length % 2 !== 0) return false

// const dictionary = {
// 	'}': '{',
// 	')': '(',
// 	']': '['
// }
// const stack = []

// for (let i = 0; i < s.length; i++) {
// 	const currChar = s[i]
// 	const lastChar = stack[stack.length - 1]
// 	const delChar = dictionary[currChar]

// 	if (delChar) {
// 		// 2
// 		if (delChar === lastChar) {
// 			stack.pop()
// 		} else {
// 			return false
// 		}
// 	} else {
// 		stack.push(currChar)
// 	}
// }

// // 3
// return !stack.length