"use strict";
const title = "Second lesson";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 20;
const rollback=25;
const fullPrice = 2000;
const adaptive = true;


console.log(typeof(title),typeof(fullPrice),typeof(adaptive));
console.log(`длинна строки screens: ${screens.length}`);
console.log(`стоимость верстки экранов: 
	${fullPrice} рублей/ 
	${Math.round(fullPrice / 70)} долларов/
	${Math.round(fullPrice / 1.5)} гривен/
	${Math.round(fullPrice / 3)} юаней`);
console.log(screens.toLowerCase().split(','));
console.log(`Процент отката посреднику за работу:${fullPrice * (rollback/100)} рублей`);

