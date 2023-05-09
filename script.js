"use strict";
const title = prompt('Как называется ваш проект');
const screensRes = ['Простые','Сложные','Интерактивные'];
let screens = prompt('Какие типы экранов нужно разработать?');
screensRes.find(el => el.toLocaleLowerCase() == screens.toLowerCase()) ? screens=screensRes.find(el => el.toLocaleLowerCase() == screens.toLowerCase()) :
screens='не определено заказчиком';
const screenPrice = prompt('Сколько будет стоить данная работа?');
	Number.isFinite(+screenPrice)?screenPrice:console.error('вы задали не корректное значение');
const rollback = 25;

let adaptive = prompt('Нужен ли адаптив на сайте?');
adaptive.toLocaleLowerCase() === 'да' ? adaptive = true : adaptive = false;
	
const fullPrice = countFullPrice(2, screenPrice);

const servicePercentPrice =Math.ceil(fullPrice.totalPrice - (fullPrice.totalPrice*(rollback/100)));
console.log(`Итоговая стоимость работы с учетом отката посреднику будет: ${servicePercentPrice} рублей`);

let totalPrice1 = 0;

if (servicePercentPrice >= 30000) { 
	console.log('Ваша скидка 10%');
	totalPrice1 = servicePercentPrice - (servicePercentPrice * 0.1);
	console.log(`Стоимость с учетом скидки:${totalPrice1}`);
}
else if (15000 <= servicePercentPrice < 30000) { 
	console.log('Ваша скидка 5%');
	totalPrice1 = servicePercentPrice-(servicePercentPrice*0.05);
	console.log(`Стоимость с учетом скидки:${totalPrice1}`);
}
else if (0 < servicePercentPrice < 15000) { 
	totalPrice1 = servicePercentPrice;
	console.log('Скидка не предусмотрена');
}
else if ( servicePercentPrice < 0) { 
	console.log('Что то пошло не так');
}
const consoleTable = [
	{
		name: title,
		screens:screens,
		adaptive: adaptive,
		totalPrice: totalPrice1,
		servises:fullPrice.servises
	}
];
console.table(consoleTable);



function quessionToUser(quession) { 
	return prompt(quession);
	
}
	
function countFullPrice(times,screenPrice) { 
	const arr = [];
	const servisesArray = [];
	arr.push(screenPrice);
	for(let i=0;i<times;i++)
	{
		const service1 = quessionToUser('Какой дополнительный тип услуги нужен?');
		let servicePrice1 = quessionToUser('Сколько это будет стоить?');
		servisesArray.push(service1);
		arr.push(servicePrice1);
		}
	const init = 0;
	return {
		totalPrice: arr.reduce((acc, cur) => (+acc) + (+cur), init),
		servises:servisesArray
	};
	 
}

/* console.log(typeof(title),typeof(fullPrice),typeof(adaptive));
console.log(`длинна строки screens: ${screens.length}`);
console.log(`стоимость верстки экранов: 
	${fullPrice} рублей/ 
	${Math.round(fullPrice / 70)} долларов/
	${Math.round(fullPrice / 1.5)} гривен/
	${Math.round(fullPrice / 3)} юаней`);
console.log(screens.toLowerCase().split(','));
console.log(`Процент отката посреднику за работу:${fullPrice * (rollback/100)} рублей`); */