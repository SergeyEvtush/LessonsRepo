"use strict";

const titleD = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const screenBtn = document.querySelector('.screen-btn');

const percent=document.querySelectorAll('.other-items.percent');
const number = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback').children[0].querySelector('[type="range"]');
const spanRange = document.querySelector('.rollback').children[0].querySelector('.range-value');

const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

/*
1) Запретить нажатие кнопки Рассчитать если не выбран ни один тип экрана в выпадающем списке и не введено их количество.
 Учесть что блоков с типом экранов может быть несколько, но пустых (незаполненных) элементов быть не должно

2) Повесить на input[type=range] (в блоке с классом .rollback) обработчик события. 
При перемещении ползунка значение под ним (в элементе span) должно меняться. 
А так же это значение должно заноситься в свойство rollback нашего объекта для последующих расчетов!

3) В нашем объекте присутствует метод getServicePercentPrice.
 Данный метод рассчитывает доход с учетом отката посреднику.
  Перенести его логику в метод addPrices и выводить в поле с подписью "Стоимость с учетом отката"
4) В методе addScreens мы добавляем в свойство appData.
screens новые объекты.
 Добавить свойство count в которое занести количество экранов из input.
  В методе addPrices посчитать общее количество экранов и 
  вывести на страницу итоговое значение в поле с подписью "Количество экранов"
5) Удалить из проекта метод getRollbackMessage */

const appData = {
		title:'', 
		screens:[], 
		screenPrice:0, 
	adaptive: true, 
	servicePricesPersent:0,
	servicePricesNumber:0,
	fullPrice: 0,
	servicePercentPrice:0,
	servicesPercent: {}, 
	servicesNumber: {}, 
	rollback: 10,
	screensCount: 10,
	init: function () { 
		appData.addTitle();
		startBtn.addEventListener('click', () => {
			if (!appData.isError()) {
				appData.start();
			} else { 
				console.error("ошибка при вводе данных");
				
			}
		}
		);
		screenBtn.addEventListener('click', appData.addScreenBlock);
		inputRange.addEventListener('change', () => { 
			appData.changeSpan(inputRange.value);
			appData.rollback = inputRange.value;
		});
	},
	isError: function () {
		screens = document.querySelectorAll('.screen');
		const arrError = [];
		screens.forEach(el => {
			const select = el.querySelector('select');
			const input = el.querySelector('input');
			if (select.value === '' || !appData.isNumber(input.value.trim())) {
				arrError.push(true);
			} else { 
				arrError.push(false);
			}
		});
		
		
		if (arrError.includes(true)) {
			return true;
		} else { 
			return false;
		}
	 },
	addTitle: function () {
	
		document.title = titleD.textContent;
	},
	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen);
		
	 },
	start: function () {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		appData.showResult();
			/* 
			appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
			appData.logger(); */
	},
	showResult: function () {
		totalInput0.value = appData.screenPrice;
		totalInput1.value = appData.screensCount;
		totalInput2.value = appData.servicePricesPersent + appData.servicePricesNumber;
		totalInput3.value = appData.fullPrice;
		totalInput4.value = appData.servicePercentPrice;
	 },
	//проверка на число
	isNumber : function (num) {


		return !isNaN(parseFloat(num))&&isFinite(num);
	},
	addScreens: function () {
		screens = document.querySelectorAll('.screen');
		screens.forEach((screen,index) => { 
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;
			const count = input.value;
			this.screens.push({
				id: index,
				name: selectName,
				price: +input.value * +select.value,
				count:+count
			});
				
console.log(appData.screens);
		});

	},
	addServices: function () {
		percent.forEach(el => { 
			const check = el.querySelector('input[type=checkbox]');
			const label = el.querySelector('label');
			const input = el.querySelector('input[type=text]');
			if (check.checked) { 
				appData.servicesPercent[label.textContent] = +input.value;
			}
			
		});
		number.forEach(el => { 
			const check = el.querySelector('input[type=checkbox]');
			const label = el.querySelector('label');
			const input = el.querySelector('input[type=text]');
			if (check.checked) { 
				appData.servicesNumber[label.textContent] = +input.value;
			}
			
		});
		
	 },

	addPrices: function () {
		appData.screenPrice = this.screens.reduce((acc, el) => acc + el.price, 0);
		for (const key in appData.servicesNumber) {
			appData.servicePricesNumber += appData.servicesNumber[key];
		}
		for (const key in appData.servicesPercent) {
			appData.servicePricesPersent +=appData.screenPrice*(appData.servicesPercent[key]/100) ;
		}
		
		appData.screensCount=appData.screens.reduce((acc, cur) => acc + cur.count, 0);
		appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPersent;
		appData.servicePercentPrice= Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
	},
	
	logger: function () { 
		for (const key in this) {
			if (Object.hasOwnProperty.call(this, key)) {
				const element = this[key];
				console.log(element);
				
			}
		}
	},
	changeSpan: function (num) {
		spanRange.innerText = `${num}%`;
	 }       
};
appData.init();
















