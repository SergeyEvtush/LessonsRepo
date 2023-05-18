"use strict"
/* Восстановить порядок книг.
Заменить картинку заднего фона на другую из папки image
Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
Удалить рекламу со страницы
Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
const books = document.querySelectorAll('.book');

books.forEach(el => { 
	const a = el.querySelector('a').innerText;
	const number = a.substring(0,a.indexOf('.')).split().filter(num=>num!=isNaN&&num!=isFinite);
	console.log(number);
	
});