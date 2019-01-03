/*
 * Home page js 
 */

{	
	const DOM = {};
	DOM.click1 = document.querySelector('.click1');
	DOM.click2 = document.querySelector('.click2');
	DOM.click3 = document.querySelector('.click3');
	DOM.click4 = document.querySelector('.click4');
	charming(DOM.click1);
	charming(DOM.click2);
	charming(DOM.click3);
	charming(DOM.click4);
	DOM.clickLetters1 = Array.from(DOM.click1.querySelectorAll('span'));
	DOM.clickLetters2 = Array.from(DOM.click2.querySelectorAll('span'));
	DOM.clickLetters3 = Array.from(DOM.click3.querySelectorAll('span'));
	DOM.clickLetters4 = Array.from(DOM.click4.querySelectorAll('span'));

	const init = () => {
		DOM.click1.addEventListener('mouseenter', enterHoverInFn1);
		DOM.click1.addEventListener('mouseleave', enterHoverOutFn1);
		DOM.click2.addEventListener('mouseenter', enterHoverInFn2);
		DOM.click2.addEventListener('mouseleave', enterHoverOutFn2);
		DOM.click3.addEventListener('mouseenter', enterHoverInFn3);
		DOM.click3.addEventListener('mouseleave', enterHoverOutFn3);
		DOM.click4.addEventListener('mouseenter', enterHoverInFn4);
		DOM.click4.addEventListener('mouseleave', enterHoverOutFn4);
	};


	const enterHoverInFn1 = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.clickLetters1);
		anime({
			targets: DOM.clickLetters1,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#000',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn1 = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.clickLetters1);
		anime({
			targets: DOM.clickLetters1,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	const enterHoverInFn2 = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.clickLetters2);
		anime({
			targets: DOM.clickLetters2,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#000',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn2 = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.clickLetters2);
		anime({
			targets: DOM.clickLetters2,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	const enterHoverInFn3 = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.clickLetters3);
		anime({
			targets: DOM.clickLetters3,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#000',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn3 = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.clickLetters3);
		anime({
			targets: DOM.clickLetters3,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	const enterHoverInFn4 = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.clickLetters4);
		anime({
			targets: DOM.clickLetters4,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#000',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn4 = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.clickLetters4);
		anime({
			targets: DOM.clickLetters4,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};


	// JQuery code
	$(document).ready(function() {
		$(window).on('scroll', function(){
		if($(window).scrollTop()>=80){
			$('#navigation').addClass('nav_black');
			$('#navul').css({ "margin-top" : "6px" });
			$('#navlogo').css({ "margin-top" : "2px" });
			$('#navigation').css({ "color" : "white" });
			$("ul li a").css({ "color" : "white" });
		}
		if($(window).scrollTop()<80){
			$('#navigation').removeClass('nav_black'); 
			$('#navul').css({ "margin-top" : "35px" });
			$('#navlogo').css({ "margin-top" : "35px" });
			$('#navigation').css({ "color" : "white" });
			$("ul li a").css({ "color" : "white" });
							
					}
		        });
		TweenMax.to(".overlay h1", 3, {
			opacity: 0,
		 	y: -60,
		 	ease: Expo.easeInOut
		})
		TweenMax.to(".overlay", 4, {
		 	delay: 1,
		 	top: "-140%",
		 	ease: Expo.easeInOut
		})
	});

	init();
}
