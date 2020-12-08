'use strict'

function debounce(f, ms) {
    let isCooldown = false;

    return function(...args) {
        if (isCooldown) return;

        isCooldown = true;
        f.apply(this, args);

        setTimeout(() => isCooldown = false, ms);
    }
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)