"use strict";

const titleD = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const percent=document.querySelectorAll('.other-items.percent');
const number=document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback').children[0].querySelector('[type="range"]');
const spanRange = document.querySelector('.rollback').children[0].querySelector('.range-value');
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
let screen = document.querySelectorAll('.screen');






/* const appData = {
		title:'', 
		screens:[], 
		screenPrice:0, 
	adaptive: true, 
	allServicePrices:0,
	fullPrice: 0,
	servicePercentPrice:0,
	services: {}, 

		rollback:10,
	asking: function () {
		let title;
		do {
			title = prompt('Как называется ваш проект');
		 }while(appData.isNumber(title))
			
		 appData.title = title;

			 for (let i = 0; i < 2; i++) { 
				 let name;
				 do {
					 name = prompt('Какие типы экранов нужно разработать?');
				 }
				 while (appData.isNumber(name));
					
				 
				 
				 let price = 0;
				 do {
					price = prompt('Сколько будет стоить данная работа?');
					price = price.trim();
				 } while (!appData.isNumber(price));
				 this.screens.push({
					 id: i,
					 name: name,
					 price: +price
				 });
			 }

			 
			 
			for(let i=0;i<2;i++)
			{

				let name;
				do {
					name = prompt('Какой дополнительный тип услуги нужен?');
				}
				while (appData.isNumber(name));
				let price = 0;
		
				do {
					price = prompt('Сколько это будет стоить?');
				} while (!appData.isNumber(price));
				appData.services[name+i] = +price;//усложненное задание 1
			}
			 
			 appData.adaptive = confirm('Нужен ли адаптив на сайте?');
		
	},
		 
	addPrices: function () {
		appData.screenPrice = this.screens.reduce((acc, el) => acc + el.price, 0);//усложненное задание 2
		for (const key in appData.services) {
			appData.allServicePrices += appData.services[key];
		}
	 },

//проверка на число
 	isNumber : function (num) {
console.log(typeof(num));

	return !isNaN(parseFloat(num))&&isFinite(num);
	},
	 getServicePercentPrices:function(fPrice,rBack) { 
		appData.servicePercentPrice= Math.ceil(fPrice - (fPrice * (rBack / 100)));
	},
	 getRollBackMessage :function (price) {

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
	},
	 getFullPrice:function(scrPr, allServPrice) {
		appData.fullPrice=+scrPr + allServPrice;
	 },
	  getTitle:function (titleWord)  {
		appData.title=titleWord.trim().split('').map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase()).join('');
	},
	logger: function () { 
		for (const key in this) {
			if (Object.hasOwnProperty.call(this, key)) {
				const element = this[key];
				console.log(element);
				
			}
		}
	},
	start: function () {
			appData.asking();
			appData.addPrices();
			appData.getFullPrice(appData.screenPrice,appData.allServicePrices);
			appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
			appData.logger();
	 }
}; */
//appData.start();

 















