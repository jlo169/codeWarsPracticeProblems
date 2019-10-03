//Create a function where it returns true if a word contains no repeating letters anywhere in the word.
//Return false if there are repeating letters.
//Account for case sensitive letters. 
//Should return '' as a true isogram.  

function isIsogram(str){
    var lowerStr = str.toLowerCase();
    var isIt = true
    for (var i = 0; i < lowerStr.length; i++) {
        for (var j = i + 1; j < lowerStr.length; j++) {
            if (lowerStr[i] === lowerStr[j]) {
                isIt = false;
            }
        }
    }
    return isIt;
}

