	'use strict'


	let log = prompt("Enter login: ", "");

	if (log === null || log === "") {
	    alert("Отмена");
	} else if (log !== "Админ") {
	    alert("Я вас не знаю");
	} else {
	    let pas = prompt("Enter password: ", "");
	    if (pas === null || pas === "") {
	        alert("Отмена");
	    } else if (pas !== "Я главный") {
	        alert("Неверный пароль");
	    } else {
	        alert("Здравствуйте!");
	    }
	};