'use strict'

Function.prototype.defer = function(ms) {

    setTimeout(this, ms);
}

function f() {
  alert("Hello!");
}

f.defer(5000); // выведет "Hello!" через 1 секунду