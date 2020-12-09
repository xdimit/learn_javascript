'use strict'

function throttle(f, ms) {
    let isCooldown = false,
        saveArgs,
        saveThis;

    return function wrapper(...args) {
        if (isCooldown) {
            saveArgs = args;
            saveThis = this;
            return;
        }

        f.apply(this, args);

        isCooldown = true;

        setTimeout(() => {
            isCooldown = false;
            if (saveArgs) {
                wrapper.apply(saveThis, saveArgs);
                saveArgs = saveThis = null;
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано