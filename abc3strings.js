//give the following strings

var special = 'åbçdéf©hi∆˚¬µøπœ®ß†ü√∑≈¥Ω!';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!';
var lower = 'abcdefghijklmnopqrstuvwxyz!';

//output the following sentence
//              012345678901234567890123456789
//var target = 'åbçDEFghi∆˚¬MNOpqrß†üVWXyz!';

const superAlphabet = (special, upper, lower) => {
    const alpArr = [];
    const resultArr = [];
    let alpCounter = 2;
    alpArr.push(special.split(''));
    alpArr.push(upper.split(''));
    alpArr.push(lower.split(''));

    for (i = 0; i < lower.length; i++) {
        if(i % 3 === 0) {
            alpCounter++;
            if (alpCounter > 2) {
                alpCounter = 0;
            }
        }
        resultArr.push(alpArr[alpCounter][i]);
    }
    return resultArr.join('');
}

console.log(superAlphabet(special, upper, lower))




//reviewed code 

// //jonathon lo's code, modified to use less arrays
// var special = 'åbçdéf©hi∆˚¬µøπœ®ß†ü√∑≈¥Ω!';
// var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!';
// var lower = 'abcdefghijklmnopqrstuvwxyz!';

// //output the following sentence
// //              012345678901234567890123456789
// //var target = 'åbçDEFghi∆˚¬MNOpqrß†üVWXyz!';

// const superAlphabet = (special, upper, lower) => {
//     const alpArr = [special, upper, lower];
//     let resultStr = '';
//     let alpCounter = 2;

//     for (i = 0; i < lower.length; i++) {
//         if(i % 3 === 0) {
//             alpCounter++;
//             if (alpCounter > 2) {
//                 alpCounter = 0;
//             }
//         }
//         resultStr += alpArr[alpCounter ][i];
//     }
//     return resultStr;
// }

// console.log(superAlphabet(special, upper, lower))
