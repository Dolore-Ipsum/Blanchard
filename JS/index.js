window.addEventListener('DOMContentLoaded', function () {

	// Burger and Search

	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('.header__top-nav').classList.toggle('burger-is-active');
		document.querySelector('.header__link').classList.toggle('burger-is-active');
		document.querySelector('.burger__btn').classList.toggle('burger__btn-is-active');
	})

	document.querySelector('#search').addEventListener('click', function () {
		document.querySelector('.header__list').classList.toggle('search-is-active');
		document.querySelector('.search__btn').classList.toggle('search__btn-is-active');
	})

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
		// Responsive breakpoints
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
				spaceBetween: 34,
			},

			769: {
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 36,
				slidesPerColumnFill: 'row-reverse',
			},

			959: {
				slidesPerColumn: 2,
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 35,
				slidesPerColumnFill: 'row-reverse',
			},

			1291: {
				slidesPerColumn: 2,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 50,
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
		$(document).on("click", ".transition", function (event) {
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

			document.querySelectorAll('.catalog__btn').forEach(function (btn) {
				btn.classList.remove('btn_is-active');
			});

			document.querySelectorAll('.catalog__btn_active').forEach(function (btn_act) {
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

	document.querySelectorAll('.catalog__btn_active').forEach(function (btn) {
		btn.classList.add('btn_is-active');
	});

	document.querySelectorAll('.catalog__btn').forEach(function (btn) {
		btn.addEventListener('click', function (event) {

			document.querySelectorAll('.catalog__btn').forEach(function (content) {
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

	new window.JustValidate('.contacts__callback-form');

	var selector = document.querySelector("input[type='tel']");

	var im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);


	new JustValidate('.contacts__callback-form', {
		rules: {
			name: {
				required: true,
				minLength: 2,
				maxLength: 10,
				strength: {
					custom: '(^[A-Z, a-z, А-Я, а-я])'
				}

			},
			tel: {
				required: true,
				function: (name, value) => {
					const phone = selector.inputmask.unmaskedvalue()
					return Number(phone) && phone.length === 10
				}
			},
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
				iconImageHref: '/img/7.contacts/point.svg',
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

	// Smooth transition

	const navbarToggler = document.querySelector(".information__link");
	const navbarMenu = document.querySelector(".information");
	const navbarLinks = document.querySelectorAll(".information__link");

	navbarToggler.addEventListener("click", navbarTogglerClick);

	function navbarTogglerClick() {
		navbarToggler.classList.toggle("open-navbar-toggler");
		navbarMenu.classList.toggle("open");
	}

	// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

	for (let i = 0; i < navbarLinks.length; i++) {
		navbarLinks[i].addEventListener("click", navbarLinkClick);
	}

	function navbarLinkClick(event) {

		smoothScroll(event); // Call the "smoothScroll" function

		if (navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
			navbarToggler.click();
		}

	}

	function smoothScroll(event) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
		const targetPosition = document.querySelector(targetId).offsetTop;
		const startPosition = window.pageYOffset;
		const distance = targetPosition - startPosition;
		const duration = 1000;
		let start = null;

		window.requestAnimationFrame(step);

		function step(timestamp) {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			// window.scrollTo(0, distance*(progress/duration) + startPosition);
			window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
			if (progress < duration) {
				window.requestAnimationFrame(step);
			}
		}
	}

	// Easing Functions

	function linear(t, b, c, d) {
		return c * t / d + b;
	};

	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};

	function easeInOutCubic(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t * t + b;
		t -= 2;
		return c / 2 * (t * t * t + 2) + b;
	};



	// Модальное окно

	(function () {
		if (typeof window.CustomEvent === "function") return false;
		function CustomEvent(event, params) {
			params = params || { bubbles: false, cancelable: false, detail: null };
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}
		window.CustomEvent = CustomEvent;
	})();
	
	$modal = function (options) {
		var
			_elemModal,
			_eventShowModal,
			_eventHideModal,
			_hiding = false,
			_destroyed = false,
			_animationSpeed = 200;
	
		function _createModal(options) {
			var
				elemModal = document.createElement('div'),
				modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
				modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
				modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
				modalHTML,
				modalFooterHTML = '';
	
			elemModal.classList.add('modal');
			modalHTML = modalTemplate.replace('{{title}}', options.title || '');
			modalHTML = modalHTML.replace('{{content}}', options.content || '');
			if (options.footerButtons) {
				for (var i = 0, length = options.footerButtons.length; i < length; i++) {
					var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
					modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
					modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
					modalFooterHTML += modalFooterButton;
				}
				modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
			}
			modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
			elemModal.innerHTML = modalHTML;
			document.body.appendChild(elemModal);
			return elemModal;
		}
	
		function _showModal() {
			if (!_destroyed && !_hiding) {
				_elemModal.classList.add('modal__show');
				document.dispatchEvent(_eventShowModal);
			}
		}
	
		function _hideModal() {
			_hiding = true;
			_elemModal.classList.remove('modal__show');
			_elemModal.classList.add('modal__hiding');
			setTimeout(function () {
				_elemModal.classList.remove('modal__hiding');
				_hiding = false;
			}, _animationSpeed);
			document.dispatchEvent(_eventHideModal);
		}
	
		function _handlerCloseModal(e) {
			if (e.target.dataset.dismiss === 'modal') {
				_hideModal();
			}
		}
	
		_elemModal = _createModal(options || {});
	
	
		_elemModal.addEventListener('click', _handlerCloseModal);
		_eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
		_eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });
	
		return {
			show: _showModal,
			hide: _hideModal,
			destroy: function () {
				_elemModal.parentElement.removeChild(_elemModal),
					_elemModal.removeEventListener('click', _handlerCloseModal),
					_destroyed = true;
			},
			setContent: function (html) {
				_elemModal.querySelector('[data-modal="content"]').innerHTML = html;
			},
			setTitle: function (text) {
				_elemModal.querySelector('[data-modal="title"]').innerHTML = text;
			}
		}
	};

	(function () {
		var elemTarget;
		// создаём модальное окно
		var modal = $modal({
		//   title: 'Просмотр изображения',
		  content: '<img src="" alt="" style="display: block; height: auto; max-width: 100%;">',
		//   footerButtons: [
		// 	{ class: 'btn btn__delete', text: 'Удалить', handler: 'modalHandlerDelete' },
		// 	{ class: 'btn btn__cancel', text: 'Закрыть', handler: 'modalHandlerCancel' }
		//   ]
		});
		// при клике на документ
		document.addEventListener('click', function (e) {
		  // если мы кликнули на измобржение расположенное в .img__items, то...
		  if (e.target.matches('.gallery__slide img')) {
			elemTarget = e.target;
			// устанавливаем модальному окну title
			modal.setContent('<div style="flex: 1 0 60%;"><img src="' + e.target.src + '" alt="' + e.target.alt + '" style="display: block; height: auto; max-width: 100%; margin: 0 auto; transform: scale(1.3)"></div><div style="flex: 1 0 40%;"><div style="font-size: 18px; font-weight:bold;">');
			modal.show();
		  } else if (e.target.dataset.handler === 'modalHandlerCancel') {
			modal.hide();
		  } else if (e.target.dataset.handler === 'modalHandlerDelete') {
			elemTarget.parentElement.removeChild(elemTarget);
			modal.hide();
		  }
		});
	  })();

});