'use strict'

function count(obj) {
    return Object.keys(obj).reduce((a) => a + 1, 0);
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2