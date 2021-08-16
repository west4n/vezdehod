import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper';
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

import { gsap, Power2 } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {

		loop: false,
		speed: 2400,
		parallax: true

	});

	const swiperText = new Swiper('.slider-text', {

		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	});

	swiperIMG.controller.control = swiperText;
	swiperText.controller.control = swiperIMG;

	let gear = document.querySelector('.slider-gear');

	swiperText.on('slideNextTransitionStart', () => {
		gsap.to(gear, 2.8, {
			rotation: '+=40',
			ease: Power2.easeOut
		})
	})

	swiperText.on('slidePrevTransitionStart', () => {
		gsap.to(gear, 2.8, {
			rotation: '-=40',
			ease: Power2.easeOut
		})
	})

});
