"use strict";

class First { 
	constructor() { 
		
	}
	hello() {
	console.log(`Привет я метод родителя!`);
	 }
}

class Second extends First { 
	constructor(text) { 
		super();
		this.text=text;
	}
	hello() { 
		super.hello();
		console.log(`${this.text}`);
		
	}
}

const second = new Second('А я наследуемый метод!');
second.hello();
