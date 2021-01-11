'use strict'

const namesArr = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`)
            .then(successResponse => {
                    if (successResponse.status != 200) {
                        return null;
                    } else {
                        return successResponse.json();
                    }
                },

                faileResponse => null

            );
        jobs.push(job);
    }

    let result = await Promise.all(jobs);

    return result;
}

console.log(getUsers(namesArr));