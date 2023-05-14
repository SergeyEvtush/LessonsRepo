"use strict";


const appData = {
		title:'', 
		screens:'', 
		screenPrice:0, 
	adaptive: true, 
	allServicePrices:0,
	fullPrice: 0,
	servicePercentPrice:0,
		service1:'', 
		service2:'',
		rollback:10,
		 asking : function () {
			appData.title = prompt('Как называется ваш проект', 'Калькулятор верстки');
		
			appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

			do {
				appData.screenPrice = prompt('Сколько будет стоить данная работа?');
				appData.screenPrice = appData.screenPrice.trim();
			} while (!appData.isNumber(appData.screenPrice));
		
			 appData.adaptive = confirm('Нужен ли адаптив на сайте?');
		
	},
 getAllServicePrices : function () {
		let sum = 0;
		for(let i=0;i<2;i++)
		{
			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
				
			} else if (i === 1) { 
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
			}
	
			sum = +prompt('Сколько это будет стоить?');
			while (!appData.isNumber(sum)) {
				sum = +prompt('Сколько это будет стоить?');
			};
			sum += sum;
		}
		return sum;
	},
//проверка на число
 	isNumber : function (num) {

	return !isNaN(parseFloat(num))&&isFinite(num);
	},
	 getServicePercentPrices:function(fPrice,rBack) { 
		return Math.ceil(fPrice - (fPrice * (rBack / 100)));
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
		return +scrPr + allServPrice;
	 },
	  getTitle:function (titleWord)  {
		return titleWord.trim().split('').map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase()).join('');
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
			appData.allServicePrices = appData.getAllServicePrices();
			appData.fullPrice = appData.getFullPrice(appData.screenPrice,appData.allServicePrices);
			appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
			appData.logger();
	 }
};
appData.start();

 















