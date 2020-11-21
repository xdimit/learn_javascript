	'use strict'

	const n = 100;

	nextPrime:
	    for (let i = 2; i <= n; i++) {

	        for (let j = 2; j < i; j++) {
	            if (!(i % j)) continue nextPrime;
	        }
	        console.log(i);
	    }