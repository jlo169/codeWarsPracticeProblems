var reverseString = function(s) {
    for (let i = 0; i < s.length/2; i++) {
        const temp = s[i];
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp;
    }
};