'use strict'

Function.prototype.defer = function(ms) {

    return (...args) => {
        setTimeout(() => this.apply(null, args), ms);
    }
}

function f(a, b) {
    alert(a + b);
}

console.log(f.defer(5000)(1, 2)); // выведет 3 через 1 секунду.

// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };