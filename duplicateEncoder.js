// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string, or ")" if 
// that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function duplicateEncode(word){
//     var lowerWord = word.toLowerCase();
//     console.log('word is ', word)
//     var newWordArray = [];
//     for (var i = 0; i < lowerWord.length; i++) {
//         console.log('lowerWord[i] is ', lowerWord[i])
//         var letterRepeat = false;
//         for (var j = ++i; j < lowerWord.length; j++) {
//             console.log('lowerWord[j] is ', lowerWord[j])
//             if (lowerWord[i] === lowerWord[j]) {
//                 letterRepeat = true;
//             } else {
//                 letterRepeat = false;
//             }
//         }
//         if (letterRepeat = true) {
//             newWordArray.push(')')
//         } else {
//             newWordArray.push('(')
//         }
//         console.log(newWordArray)    
//     }
//     return newWordArray.join('');
// }
function duplicateEncodeB(word){
var string = "";
var obj = {};
var lowerCaseWord = word.toLowerCase();
for (var i = 0; i < lowerCaseWord.length; i++) {
  if (obj.hasOwnProperty(lowerCaseWord[i])) {
    obj[lowerCaseWord[i]]++;
  } else {
    obj[lowerCaseWord[i]] = 1;
  }
}
console.log(obj)
for (var j = 0; j < lowerCaseWord.length; j++) {
  if (obj[lowerCaseWord[j]] > 1) {
    string += ")";
  } else {
    string += "(";
  }
}
return string;
}

console.log(duplicateEncodeB('recede'));

function duplicateEncode(word) {
    var lowerWord = word.toLowerCase();
    var newWord = '';

    for (var i = 0; i < lowerWord.length; i++) {
        if (lowerWord.indexOf(lowerWord[i]) === lowerWord.lastIndexOf(lowerWord[i])) {
            newWord += '(';
        } else {
            newWord += ')';
        }
    }
    return newWord;
}
console.log(duplicateEncode('recede'))