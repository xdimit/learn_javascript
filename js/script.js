'use strict'

function getSecondsToTomorrow() {
    let d = new Date();
    const fullDay = 24 * 3600;
    return fullDay - (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
}


console.log(`${getSecondsToTomorrow()}`);