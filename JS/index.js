window.addEventListener('DOMContentLoaded', function () {

	// Burger and Search

	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('.header__top-nav').classList.add('burger-is-active');
		document.querySelector('.header__list').classList.remove('search-is-active');
		document.querySelector('.header').classList.remove('header-is-active');
		document.querySelector('.search__btn').classList.remove('search__btn-is-active');
		document.querySelector('.header__container').classList.remove('header__container-search-active');
		document.querySelector('.header').classList.add('header__container-burger-active');
	})

	document.querySelector('.cross').addEventListener('click', function () {
		document.querySelector('.header__top-nav').classList.remove('burger-is-active');
		document.querySelector('.header').classList.remove('header__container-burger-active');
	})

	document.querySelector('.search__open').addEventListener('click', function () {
		document.querySelector('.header__list-search-1024').classList.add('header__list-search-1024-is-opened');
		document.querySelector('.header__container').classList.add('header__container-search-active');
		document.querySelector('.header__list').classList.add('search-is-active');
		document.querySelector('.search__btn').classList.add('search__btn-is-active');
		document.querySelector('.header').classList.add('header-is-active');
		document.querySelector('.search__open').classList.add('search__open_none');
	})

	document.querySelector('.close__btn').addEventListener('click', function () {
		document.querySelector('.header__list-search-1024').classList.remove('header__list-search-1024-is-opened');
		document.querySelector('.header__container').classList.remove('header__container-search-active');
		document.querySelector('.header__list').classList.remove('search-is-active');
		document.querySelector('.search__btn').classList.remove('search__btn-is-active');
		document.querySelector('.header').classList.remove('header-is-active');
		document.querySelector('.search__open').classList.remove('search__open_none');
	})

	$(function () {
		if ($(window).width() > 768) {
	
	jQuery(document).mouseup(function (e){ // событие клика по веб-документу
		var div = jQuery(".header__list-search-1024"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				jQuery(".header").removeClass('header-is-active');
				jQuery(".search__btn").removeClass('search__btn-is-active');
				jQuery(".header__container").removeClass('header__container-search-active');
				jQuery(".header__list").removeClass('search-is-active');
				jQuery(".search__open").removeClass('search__open_none');
				jQuery(".header__list-search-1024").removeClass('header__list-search-1024-is-opened');
				$('.js-validate-error-label').attr('style', 'display: none;');
				
			}
		});
	}
});

	// SimpleBar

	$('.header__list-scroll').each(function () {
		new SimpleBar($(this)[0], {
			autoHide: false,
			scrollbarMaxSize: 35
		});
	});


	// Select gallery

	const element = document.querySelector('#filter');
	const choises = new Choices(element, {
		searchEnabled: false,
		itemSelectText: ''
	});

	// Swiper 

	var mySwiper = new Swiper('.gallery__swiper-container', {
		slidesPerColumnFill: 'row',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		resizeObserver: true,
		// responseive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 32,
				grabCursor: true,
			},

			321: {
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 33,
				grabCursor: true,
			},

			710: {
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 36,
			},

			769: {
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 40,
				slidesPerColumnFill: 'row-reverse',
			},

			959: {
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 39,
				slidesPerColumnFill: 'row-reverse',
			},

			1291: {
				slidesPerColumn: 2,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 53,
			},

			1919: {
				slidesPerColumn: 2,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 58,
			},

		},
		// If we need pagination
		pagination: {
			el: '.swiper-pagination.gallery__pagination',
			clickable: 'true',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},

		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},

		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},
	})

	// Smooth transition

	$(document).ready(function () {
		$(document).on("click", "a[href^='#']", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 1500);
		});
	});

	// Tabs + Accordion

	document.querySelectorAll('.catalog__discription_is-active').forEach(function (disc) {
		disc.classList.add('specification_is-active');
	});

	document.querySelectorAll('.tab__item').forEach(function (btn) {
		btn.addEventListener('click', function (event) {

			const path = event.currentTarget.dataset.path

			event.target.classList.add('tab__is-focused')

			document.querySelectorAll('.catalog__info').forEach(function (content) {
				content.classList.remove('catalog__info_is-active')
			});

			document.querySelectorAll('.catalog__discription').forEach(function (spec_act) {
				spec_act.classList.remove('specification_is-active');
			});

			document.querySelectorAll('.catalog__discription_is-active').forEach(function (spec) {
				spec.classList.add('specification_is-active');
			});

			document.querySelectorAll('.catalog__link').forEach(function (btn) {
				btn.classList.remove('btn_is-active');
			});

			document.querySelectorAll('.catalog__link_active').forEach(function (btn_act) {
				btn_act.classList.add('btn_is-active');
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('catalog__info_is-active')
		});
	});


	document.querySelectorAll('.tab__btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {

			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.tab__btn').forEach(function (content) {
				content.classList.remove('tab__is-focused')
			});

			document.querySelectorAll('.tab__block').forEach(function (tabContent) {
				tabContent.classList.remove('tab__block_is-active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('tab__block_is-active')
		});
	});

	// Accordion buttons

	document.querySelectorAll('.catalog__link_active').forEach(function (btn) {
		btn.classList.add('btn_is-active');
	});

	document.querySelectorAll('.catalog__link').forEach(function (btn) {
		btn.addEventListener('click', function (event) {

			document.querySelectorAll('.catalog__link').forEach(function (content) {
				content.classList.remove('btn_is-active')
			});

			event.target.classList.toggle('btn_is-active')

			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.catalog__discription').forEach(function (content) {
				content.classList.remove('specification_is-active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('specification_is-active')
		});
	});


	// Accordion

	$(function () {
		$("#accordion").accordion();
	});

	$(".selector").accordion({
		collapsible: true,
		heightStyle: "content",
	});

	$(".selector").accordion("refresh");

	// swiperEvents

	var swiperEvents = new Swiper('.cards__container', {
		grabCursor: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		grabCursor: false,
		observer: true,
		breakpoints: {

			0: {
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				grabCursor: true,
				spaceBetween: 0,
			},
			629: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				grabCursor: true,
				spaceBetween: 20,
			},
			710: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				grabCursor: false,
			},

		},
		pagination: {
			el: '.swiper-pagination.cards__pagination',
			clickable: 'true'
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},

		observer: true,
		observeParents: true,
		callback: true,

		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},

		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},

		watchSlidesProgress: true,
		watchSlidesVisibility: true,

	});

	// Events

	document.querySelector('#eventsBtn').addEventListener('click', function () {
		document.querySelectorAll('.cards__block_is-active').forEach(function (el) {
			el.classList.add('cards_is-active')
			document.querySelector('.cards__container').classList.add('events_is-active')
			document.querySelector('#eventsBtn').classList.add('none')
		})
	})

	// editions

	document.querySelector('#editionsSpoiler').addEventListener('click', function () {
		document.querySelector('.features__spoiler').classList.toggle('spoiler_is-active')
		document.querySelector('.editions').classList.toggle('editions__height-is-active')
	})

	var swiperEditions = new Swiper('.editions__swiper-container', {
		grabCursor: true,
		observer: true,
		breakpoints: {
			0: {
				grabCursor: false,
				touchRatio: 0,
			},

			710: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				slidesPerGroup: 2,
				spaceBetween: 37,
				grabCursor: true,
			},

			958: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				slidesPerGroup: 2,
				spaceBetween: 50,
				grabCursor: true,

			},

			1024: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				slidesPerGroup: 2,
				spaceBetween: 50,
				grabCursor: true,
			},


			1391: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 50,
				grabCursor: true,
			},
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination.editions__pagination',
			clickable: 'true',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.editions__swiper-button-next',
			prevEl: '.editions__swiper-button-prev',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},

		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},

		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},

		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		autoheight: true,

	});

	var swiperProjects = new Swiper('.swiper__projects-container', {
		grabCursor: true,
		observer: true,
		breakpoints: {
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 25,
				grabCursor: true,
			},

			710: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 34,
				grabCursor: true,
			},

			959: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 52,
				grabCursor: true,
			},


			1919: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 52,
				grabCursor: true,
			},

		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination.pagination__projects',
			clickable: 'true',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.projects__swiper-button-next',
			prevEl: '.projects__swiper-button-prev',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},

		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},

		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},

		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		autoheight: true,

	});

	// Валидация форм

	var selector = document.querySelectorAll("input[type='tel']");

	var im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);


	let validateForms = function (selector, rules, successModal, yaGoal) {
		new JustValidate('.contacts__callback-form', {

			rules: rules,

			// form sender

			submitHandler: function (form) {

				let formData = new FormData(form);

				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Posted')
						}
					}
				}

				xhr.open('POST', 'mail.php', true);

				xhr.send(formData);

				form.reset();
			},

				messages: {
					name: {
						minLength: 'Поле должно содержать не менее двух символов',
						maxLength: 'Поле должно содержать не более десяти символов',
						required: 'Как вас зовут?',
						strength: 'Недопустимый формат'
					},

					tel: {
						required: 'Укажите ваш телефон',
						function: 'Номер введён неверно'
					},

					focusWrongField: true,
				},
		});
	};

	validateForms('.contacts__callback-form', {
		name: {
			required: true,
			minLength: 2,
			strength: {
			custom: '(^[A-Z, a-z, А-Я, а-я])'
			},
		},
		tel: {
			required: true,
		}	
	});


	let validateForms2 = function (selector, rules, successModal, yaGoal) {
		new JustValidate('.send-form', {

			rules: rules,

			// form sender

			submitHandler: function (form) {

				let formData = new FormData(form);

				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Posted')
						}
					}
				}

				xhr.open('POST', 'mail.php', true);

				xhr.send(formData);

				form.reset();
			},

				messages: {
					name: {
						minLength: 'Поле должно содержать не менее двух символов',
						maxLength: 'Поле должно содержать не более десяти символов',
						required: 'Поле обязательно для заполнения',
						strength: 'Недопустимый формат'
					},

					focusWrongField: true,
				},
		});
	};

	validateForms2('.send-form', {
		name: {
			required: true,
			minLength: 2,
			strength: {
			custom: '(^[A-Z, a-z, А-Я, а-я])'
			},
		},
	});

	let validateForms3 = function (selector, rules, successModal, yaGoal) {
		new JustValidate('.send-form2', {

			rules: rules,

			// form sender

			submitHandler: function (form) {

				let formData = new FormData(form);

				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Posted')
						}
					}
				}

				xhr.open('POST', 'mail.php', true);

				xhr.send(formData);

				form.reset();
			},

				messages: {
					name: {
						minLength: 'Поле должно содержать не менее двух символов',
						maxLength: 'Поле должно содержать не более десяти символов',
						required: 'Поле обязательно для заполнения',
						strength: 'Недопустимый формат'
					},

					focusWrongField: true,
				},
		});
	};

	validateForms3('.send-form2', {
		name: {
			required: true,
			minLength: 2,
			strength: {
			custom: '(^[A-Z, a-z, А-Я, а-я])'
			},
		},
	});




	// Функция ymaps.ready() будет вызвана, когда
	// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
	ymaps.ready(init);

	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.75810, 37.63380],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 14.5,
			// }, {
			//   // Зададим ограниченную область прямоугольником, 
			//   // примерно описывающим Санкт-Петербург.
			//   restrictMapArea: [
			//       [55.65060, 37.52050],
			//       [55.85060, 37.66050]
			//   ]


		});

		// Функция ymaps.ready() будет вызвана, когда
		// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
		ymaps.ready(init);

		function init() {


			var myPlacemark = new ymaps.Placemark([55.756370, 37.600047], {
				balloonContent: 'Леонтьевский переулок, дом 5, строение 1'
			}, {
				iconLayout: 'default#image',
				iconImageHref: './img/7.contacts/point.svg',
				iconImageSize: [20, 20],
				iconImageOffset: [-3, -42],

				balloonPane: 'outerBalloon'
			});

			function setBounds() {
				// Bounds - границы видимой области карты.
				// Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
				myMap.setBounds([
					[55.65060, 37.30050],
					[55.85060, 37.35050]
				]);
			}

			// Размещение геообъекта на карте.
			// myMap.geoObjects.add(myGeoObject);
			myMap.geoObjects.add(myPlacemark);
		}

		function myFunction(x) {
			if (x.matches) {
				myMap.setCenter([55.759750, 37.616800]),
					myMap.setZoom(14.4)
			}
		}

		var x = window.matchMedia("(max-width: 1919px)")
		myFunction(x);

		myMap.controls.get('trafficControl').options.set('size', 'large');
	}

	// modal window

	const modal = new GraphModal();


	// width > 958

	$(function () {
		if ($(window).width() > 958) {

			$('.catalog__link').click(function () {
				return false
			})

		}
	});

});