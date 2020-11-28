'use strict'

// function camelize(str) {
//     let arr = str.split('-');
//     let newArr = [];
//     newArr.push(arr[0]);
//     for (let i = 1; i < arr.length; i++) {

//         let string = arr[i];

//         let newString = string[0].toUpperCase() + string.slice(1);
//         newArr.push(newString);
//     }
//     return newArr.join('');
// }

function camelize(str) {
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));