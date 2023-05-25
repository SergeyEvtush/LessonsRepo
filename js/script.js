"use strict";

const titleD = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const screenBtn = document.querySelector('.screen-btn');
const cmsVariants = document.querySelector('.hidden-cms-variants');
const selectVariant=cmsVariants.querySelector('select');
const cmsOpen = document.querySelector('#cms-open');

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
		this.addTitle();

		startBtn.addEventListener('click', () => {
			if (!this.isError()) {
				this.start();
				resetBtn.style.display = 'block';
				startBtn.style.display = 'none';
			} else { 
				console.error("ошибка при вводе данных");
				
			}
			console.log(screens.length);
			
		}
		);

		resetBtn.addEventListener('click', this.reset);

		screenBtn.addEventListener('click', this.addScreenBlock);

		inputRange.addEventListener('change', () => { 
			this.changeSpan(inputRange.value);
			this.rollback = inputRange.value;
		});
		cmsOpen.addEventListener('click', () => { 
			if (cmsOpen.checked) {
				cmsVariants.style.display = 'flex';
			} else { 
				cmsVariants.style.display = 'none';
			}
		});
		selectVariant.addEventListener('change', () => { 
				if (selectVariant.value === "other") {
					cmsVariants.querySelector('.main-controls__input').style.display = "block";
			}
		});
		
		
	},
	reset: function () {
		resetBtn.style.display = 'none';
		startBtn.style.display = 'block';

	inputRange.value = 0;
	spanRange.innerText=inputRange.value;

	screens.forEach((el, index) => {
		if (index > 0) {
			el.remove();
		}
		if (index === 0) { 
			el.querySelector('select').value = '';
			el.querySelector('input').value = '';
		}
	});

	document.querySelectorAll('.main-total__items input').forEach(el => { 
		el.value = '0';
	});
	
	document.querySelectorAll('.custom-checkbox').forEach(el => { 
		el.checked = false;
	});
	selectVariant.value = '';
	cmsVariants.style.display = 'none';


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
	deleteScreens: function () {
		if (screens.length > 1) { 
			screens.length = 1;
		}
	 },
	start: function () {
		this.addScreens();
		this.addServices();
		this.addPrices();
		this.showResult();
	},
	showResult: function () {
		totalInput0.value = this.screenPrice;
		totalInput1.value = this.screensCount;
		totalInput2.value = this.servicePricesPersent + this.servicePricesNumber;
		totalInput3.value = this.fullPrice;
		totalInput4.value = this.servicePercentPrice;
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
				
console.log(this.screens);
		});

	},
	addServices: function () {
		percent.forEach(el => { 
			const check = el.querySelector('input[type=checkbox]');
			const label = el.querySelector('label');
			const input = el.querySelector('input[type=text]');
			if (check.checked) { 
				this.servicesPercent[label.textContent] = +input.value;
			}
			
		});
		number.forEach(el => { 
			const check = el.querySelector('input[type=checkbox]');
			const label = el.querySelector('label');
			const input = el.querySelector('input[type=text]');
			if (check.checked) { 
				this.servicesNumber[label.textContent] = +input.value;
			}
			
		});
		
	 },

	addPrices: function () {
		this.screenPrice = this.screens.reduce((acc, el) => acc + el.price, 0);
		for (const key in this.servicesNumber) {
			this.servicePricesNumber += this.servicesNumber[key];
		}
		for (const key in this.servicesPercent) {
			this.servicePricesPersent +=this.screenPrice*(this.servicesPercent[key]/100) ;
		}
		
		this.screensCount = this.screens.reduce((acc, cur) => acc + cur.count, 0);

		if (selectVariant.value === '50') {
			this.fullPrice = (+this.screenPrice + this.servicePricesNumber + this.servicePricesPersent) + ((+this.screenPrice + this.servicePricesNumber + this.servicePricesPersent) / 2);
		} else { 
			this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPersent;
		}
		
		this.servicePercentPrice= Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
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
















