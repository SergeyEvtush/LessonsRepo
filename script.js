"use strict";
let title;
let screens;
let screenPrice;
let adaptive;
 let service1;
let service2;
const rollback = 10;

const getAllServicePrices = function () {
	let sum = 0;
	for(let i=0;i<2;i++)
	{
		if (i === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?');
			
		} else if (i === 1) { 
			service2 = prompt('Какой дополнительный тип услуги нужен?');
		}
		
		sum += +prompt('Сколько это будет стоить?');
		while (!isNumber(sum)) {
			sum += +prompt('Сколько это будет стоить?');
		};
	}
	console.log(sum);
	
	return sum;
};
 

//проверка на число
const isNumber = function (num) {

	return !isNaN(parseFloat(num))&&isFinite(num);
};

const asking = function () {
	title = prompt('Как называется ваш проект', 'Калькулятор верстки');

	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

	
	do {
		screenPrice = prompt('Сколько будет стоить данная работа?');
	} while (!isNumber(screenPrice));

	adaptive = confirm('Нужен ли адаптив на сайте?');
};

function getServicePercentPrices(fPrice,rBack) { 
	return Math.ceil(fPrice - (fPrice * (rBack / 100)));
}
const showTypeOf = function (variable) {
	console.log(variable, typeof (variable));
};
const getRollBackMessage = function (price) {

	let totalPrice1 = 0;

	if (price >= 30000) {
		totalPrice1 = price - (price * 0.1);
		return `Ваша скидка 10% 
Стоимость с учетом скидки:${totalPrice1}`;
	}
	else if (15000 <= price < 30000) {
		totalPrice1 = price - (price * 0.05);
		return `Ваша скидка 5% 
Стоимость с учетом скидки:${totalPrice1}`;
	}
	else if (0 < price < 15000) {
		totalPrice1 = price;
		return `Скидка отсутствует
Стоимость с учетом скидки:${totalPrice1}`;
	}
	else if (price < 0) {
		return ['Что то пошло не так',totalPrice1];
	}
};
function getFullPrice(scrPr, allServPrice) {
	return +scrPr + allServPrice;
 }
function getTitle  (titleWord)  {
	return titleWord.trim().split('').map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase()).join('');
}

asking();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice,allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
showTypeOf(getTitle(title));
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log('allServicePrices',allServicePrices);

console.log(screens);
console.log(getRollBackMessage(fullPrice));
console.log(`стоимость за вычетом процента отката посреднику:${servicePercentPrice} рублей`);
