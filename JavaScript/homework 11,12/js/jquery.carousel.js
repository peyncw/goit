"use strict";
(function ($) {
	/**
	 * Пример вызова карусели, принимает обьект который имеет настройки
	 * $(".class_element").peyCarousel({
		displaySlider: 5,
		sliderView: "rising", // модель карусели есть линейная = "linear" и возрастающая "rising"
		slideStep: 1, // шаг прокрутки карусели, количество слайдов
		slideAnimation: 500, // скорость анимации прокрутки и сайзинга слайдов
		autoScroll: "off", автопрокрутка принимает "on" или "off"
		speedScroll: 3000 // скорость автопрокрутки
		});
	 * @param {Object} options
	 * @returns {jQuery}
	 */
	$.fn.peyCarousel = function (options) {

		var defaults = {
				displaySlider: 5,
				sliderView: "rising",
				slideStep: 1,
				slideAnimation: 500,
				autoScroll: "off",
				speedScroll: 3000
			},
			settings = $.extend(defaults, options),
			$this = $(this),
			$peyArrow = $this.find(" > a"),
			$peySlideImg = $this.find("li > img"),
			$peySlideLi = $this.find("div > ul > li"),
			$peySlideUl = $this.find("div > ul"),
			$peySlideDiv = $this.find("div"),
			$slideQuantity = $peySlideLi.length,
			$widthLi = +$peySlideLi.width(),
			$stepPx = $widthLi + parseInt($peySlideLi.css("marginLeft")) + parseInt($peySlideLi.css("marginRight")),
			$stepSlide = settings.slideStep * $stepPx,
			$nonDisplayLength = -($slideQuantity - settings.displaySlider) * $stepPx,
			widthN = 0,
			$left = 0,
			centerRising = parseInt(settings.displaySlider / 2),
			centerQuantity = settings.displaySlider - 2;

		settings.sliderView = (settings.sliderView == "linear") ? "linear" : ((settings.displaySlider / 2) == centerRising) ? "linear" : "rising";

		$peySlideDiv.css({
			width: (settings.sliderView === "linear") ? (settings.displaySlider * $stepPx) + "px" :
				(settings.sliderView === "rising") ? ((settings.displaySlider * $stepPx) + $widthLi + (((centerQuantity - 1) / 2) * $widthLi)) + "px" : "100px"
		});
		$this.css({
			width: $peySlideDiv.width() + ($peyArrow.width() * 2) + "px"
		});
		/**
		 * автопрокрутка, и неактивность стрелки влево
		 */
		function autoSlide() {
			$peySlideUl.animate({
				left: ($left === $nonDisplayLength) ? $left = "0px" : $left = ($left - $stepSlide) + "px"
			}, settings.slideAnimation);
			$left = parseInt($left);
			$peyArrow.eq(0).css({
				pointerEvents: ($left == 0) ? "none" : "auto"
			});
			$rising(1);
		}

		/**
		 * Возрастающие слайды принимают n как +1 или -1 в зависимости от движение карусели
		 * @param {Number} n
		 */
		function risingSlide(n) {
			var startStop = parseInt(centerQuantity / 2);

			/**
			 * Принимает i это элемент который должен изменится 0 это центральный эелемент, все зависит от количетва видимых слайдов
			 * @param {Number} i
			 */
			function rising(i) {
				var index = centerRising + (i + widthN);
				$peySlideImg.eq(index).animate({
					maxWidth: ($peySlideImg.eq(index).index("img") == (centerRising + widthN)) ? ($widthLi * 2) + "px" : ($widthLi * 1.5) + "px"
				}, settings.slideAnimation);
			}

			widthN += n;
			if (widthN === ($slideQuantity - settings.displaySlider + 1)) {
				widthN = 0
			}
			$peySlideImg.eq(widthN).animate({
				maxWidth: $widthLi
			}, settings.slideAnimation);
			$peySlideImg.eq(widthN + (settings.displaySlider - 1)).animate({
				maxWidth: $widthLi
			}, settings.slideAnimation);
			for (var i = -startStop; i <= startStop; i++) {
				rising(i);
			}
		}

		/**
		 * Тот же Rising только проверка на модель слайдера, а именно ли у нас Rising
		 * @param {Number} a
		 */
		function $rising(a) {
			if (settings.sliderView == "rising") {
				risingSlide(a)
			}
		}

		$rising(0);

		$peyArrow.eq(0).css({
			pointerEvents: "none"
		});
		(settings.autoScroll == "off") ? console.log("autoScroll = 'off'") : setInterval(function () {
			autoSlide();
		}, settings.speedScroll);
		/**
		 * Переключатели карусели, влево вправо с анимацией
		 */
		$peyArrow.on("click", function (e) {
			var $this = $(this);
			e.preventDefault();
			$rising(($this.index() == 0) ? -1 : 1);
			$peySlideUl.animate({
				left: ($this.index() == 0) ? (($left == 0) ? $left = "0px" : $left = ($left + $stepSlide) + "px") : (($left === $nonDisplayLength) ? $left = "0px" : $left = ($left - $stepSlide) + "px")
			}, settings.slideAnimation);
			$left = parseInt($left);
			$peyArrow.eq(0).css({
				pointerEvents: ($left == 0) ? "none" : "auto"
			});
		});
		return this;
	}

})(jQuery);