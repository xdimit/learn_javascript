'use strict'

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});

alert(array[-1]); // 3
alert(array[-2]); // 2
alert(array[-3]); // 1
