"use strict";
let title = prompt('Как называется ваш проект');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
const rollback = 10;
const getAllServicePrices = function (services) {
	let init = 0;
	return services.reduce((prev, curr) => prev + curr, 0);
};
 const allServicePrices = getAllServicePrices([servicePrice1, servicePrice2]);
const fullPrice = getFullPrice(screenPrice,allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


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
	return scrPr + allServPrice;
 }
function getTitle  (titleWord)  {
	return titleWord.trim().split('').map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase()).join('');
}


showTypeOf(getTitle(title));
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens);
console.log(getRollBackMessage(fullPrice));
console.log(`стоимость за вычетом процента отката посреднику:${servicePercentPrice} рублей`);
