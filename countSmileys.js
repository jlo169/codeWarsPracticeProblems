// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


//return the total number of smiling faces in the array

function countSmileys(arr) {
    var count = 0;
    for (var arrCount = 0; arrCount < arr.length; arrCount++) {
        var currentFace = arr[arrCount];
        if (currentFace[0] === ';' || currentFace[0] === ':') {
            if (currentFace[1] === '-' || currentFace[1] === '~') {
                if (currentFace[2] === ')' || currentFace[2] === 'D') {
                    count++;
                }
            } else if (currentFace[1] === ')' || currentFace[1] === 'D') {
                count++;
            }
        }
    }
    return count;
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));