"use strict";

const DomElement = function (selector, height, width, bg, fontSize1,text='привет') {
	this.selector = selector,
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize1 = fontSize1,
		this.text = text,

		this.createElemOnPage = function () {
			let el;
			if (this.selector.startsWith('.')) {
				el = document.createElement('div');
				el.classList.add(this.selector.substring(1));
			
			}
			if (this.selector.startsWith('#')) {
				el = document.createElement('p');
				el.classList.add(`#${this.selector.substring(this.selector)}`);
				el.innerText=this.text
			}
			el.style.cssText = `
		height:${this.height}px;
		width:${this.width}px;
		background:${this.bg};
		font-size:${this.fontSize1}px;`;
			return el;
		}
	
};
document.addEventListener("DOMContentLoaded", () => { 
	const body = document.querySelector('body');

	const div = new DomElement('.block', 100, 100, 'red', 30);
	const paragraph = new DomElement('#best', 50, 50, 'red', 30);
	const block = div.createElemOnPage();

	block.style.position = 'absolute';

	block.append(paragraph.createElemOnPage());
	body.append(block);



	
	const getCoords=(elem)=> {
		let box = elem.getBoundingClientRect();
	 
		return {
		  top: box.top + window.pageYOffset,
		  right: box.right + window.pageXOffset,
		  bottom: box.bottom + window.pageYOffset,
		  left: box.left + window.pageXOffset
		};
	 }

	document.addEventListener('keydown', (e) => {
		if (e.code === 'ArrowRight') { 
			block.style.left = `${getCoords(block).left + 10}px`;
		}
		if (e.code === 'ArrowLeft') { 
			block.style.left = `${getCoords(block).left - 10}px`;
		}
		if (e.code === 'ArrowDown') { 
			block.style.top = `${getCoords(block).top + 10}px`;
		}
		if (e.code === 'ArrowUp') { 
			block.style.top = `${getCoords(block).top - 10}px`;
		}
	 });
	

});

