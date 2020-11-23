	'use strict'

	let calculator = {
	    read() {
	        this.num1 = +prompt("Enter num1: ", "");
	        this.num2 = +prompt("Enter num2: ", "");
	    },

	    sum() {
	    	return this.num1 + this.num2;
	    },

	    mul() {
	    	return this.num1 * this.num2;	
	    },
	};

	calculator.read();
	alert(calculator.sum());
	alert(calculator.mul());