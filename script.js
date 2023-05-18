"use strict"
/* Восстановить порядок книг.
Заменить картинку заднего фона на другую из папки image
Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
Удалить рекламу со страницы
Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
const books = document.querySelectorAll('.book');
const booksContainer = document.querySelector('.books');
const number = [];
const listText = [];
const body = document.querySelector('body');
const adv = document.querySelector('.adv');


  function isNumber (num) {
	console.log(typeof(num));
		return !isNaN(parseFloat(num))&&isFinite(num);
}
	
function returnNumberBook(book,str) {
	const text = book.innerText;
	return text.substring(0, text.indexOf(str)).split(' ')[1];
}
 
function returArrayFromNode(nodeList) { 
	const arr = [];
	nodeList.forEach(el => { 
		arr.push(el);
	});
	return arr;
}

function returnNewSortedArr(chapters) {
	const newTextArr = [];
	const startArr = [];
	const endArr = [];
	
	chapters.forEach((el) => { 
		if (el.innerText.includes("Введение")) { 
			startArr.push(el);
		}
		if (el.innerText.includes("Предисловие")) { 
			startArr.push(el);
		}
		if (el.innerText.includes("Глава")) { 
			newTextArr.push(el);
		}
		if (el.innerText.includes("Приложение")) { 
			endArr.push(el);
		}
	});
	newTextArr.sort((a, b) => { 
		return returnNumberBook(a,':') - returnNumberBook(b,":");
	});
	endArr.sort((a, b) => { 
		if (returnNumberBook(a, ':') < returnNumberBook(b, ":")) { 
			return -1;
		} if (returnNumberBook(a, ':') > returnNumberBook(b, ":")) { 
			return 1;
		}
		return 0;
	});
	
	const res = startArr.concat(newTextArr, endArr);
	
	return res;
 }




const numberBook=returArrayFromNode(books).sort((a, b) => { 
	return returnNumberBook(a,'.') - returnNumberBook(b,'.');
});

booksContainer.innerHTML = '';
numberBook.forEach(el => {
	booksContainer.append(el);
});
const titleBook3 = numberBook[2].querySelector('a');
const listChaptersBook2 = numberBook[1].querySelectorAll('li');
const listChaptersBook5 = numberBook[4].querySelectorAll('li');
const ulBook2 = numberBook[1].querySelector('ul');
const ulBook5 = numberBook[4].querySelector('ul');

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
adv.style.display = "none";
titleBook3.innerText = "Книга 3. this и Прототипы Объектов";
ulBook2.innerHTML = '';
ulBook5.innerHTML = '';

returnNewSortedArr(returArrayFromNode(listChaptersBook2)).forEach((el) => { 
	ulBook2.append(el);
});
returnNewSortedArr(returArrayFromNode(listChaptersBook5)).forEach((el) => { 
	ulBook5.append(el);
});
