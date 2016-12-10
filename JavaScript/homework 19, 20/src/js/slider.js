"use strict";
document.addEventListener("DOMContentLoaded", function () {
	var sliderOn = 0,
		preSliderOn,
		sliderBody = document.querySelector(".slider__body"),
		sliderImg = sliderBody.querySelectorAll("img"),
		sliderNav = sliderBody.querySelectorAll(".slider__nav li"),
		sliderText = (sliderBody.querySelectorAll(".slider__text").length > 0) ?
			sliderBody.querySelectorAll(".slider__text") : 0,
		sliderNavLength = sliderNav.length,
		timeoutId,
		opacityTimeoutId,
		opacityAnimationId,
		fps = 60,
		fpsOpacity = 1 / fps,
		disappearanceTime = 1500,
		sliderLiveTimer = 5000,
		fpsInterval = disappearanceTime / fps;

	/**
	 * Set the Style z-index, opacity element in array
	 * @param element Array elements DOM
	 * @param {Number} numArr Item index
	 * @param {Number} zIndex Style z-index: number
	 * @param {Number} opacity Style opacity: number
	 */

	function setSliderItemStyle(element, numArr, zIndex, opacity) {
		element[numArr].setAttribute("style", "z-index:" + zIndex + "; opacity:" + opacity + "");
	}

	/**
	 * sets the opacity of the text and pictures.
	 * @param {Number} pre Pre element
	 * @param {Number} thisSlide This element
	 */

	function opacitySlide(pre, thisSlide) {
		setSliderItemStyle(sliderImg, preSliderOn, 2, pre);
		setSliderItemStyle(sliderImg, sliderOn, 3, thisSlide);
		if (sliderText) {
			setSliderItemStyle(sliderText, preSliderOn, 4, pre);
			setSliderItemStyle(sliderText, sliderOn, 5, thisSlide);
		}
	}

	/**
	 * Start slider on one slide, or switch to the num {Number} slide
	 * @param {Number} num index of element
	 */

	function slider(num) {
		clearTimeout(opacityTimeoutId);
		clearInterval(opacityAnimationId);
		var afterOpacity = 1,
			beforeOpacity = 0;
		sliderNav[sliderOn].classList.remove("checkboxOn");
		if (sliderText && preSliderOn !== undefined && num !== preSliderOn) {
			setSliderItemStyle(sliderText, preSliderOn, 1, 0);
		}
		preSliderOn = sliderOn;
		if (num !== undefined) {
			sliderOn = num;
		} else {
			sliderOn = (sliderOn == sliderNavLength - 1) ? 0 : ++sliderOn;
		}
		/**
		 * Interval to change the opacity
		 * @type {number}
		 */
		opacityAnimationId = setInterval(function () {
			afterOpacity = afterOpacity - fpsOpacity;
			beforeOpacity = beforeOpacity + fpsOpacity;
			opacitySlide(afterOpacity, beforeOpacity);
		}, fpsInterval);
		/**
		 * Timeout to change the opacity and clear interval ID OpacityAnimationId
		 * @type {number}
		 */
		opacityTimeoutId = setTimeout(function () {
			opacitySlide(0, 1);
			setSliderItemStyle(sliderImg, preSliderOn, 1, 0);
			if (sliderText) {
				setSliderItemStyle(sliderText, preSliderOn, 1, 0);
			}
			clearInterval(opacityAnimationId);
		}, disappearanceTime);
		sliderNav[sliderOn].classList.add("checkboxOn");
	}

	function sliderNavClick(i) {
		/**
		 * Add event click sliderNav
		 * event clear interval Id timerId, timeoutId
		 * end add interval slider function, add timeout interval slider
		 */
		sliderNav[i].addEventListener("click", function sliderClickNav(e) {
			e.preventDefault();
			if (i !== sliderOn) {
				clearInterval(timerId);
				clearTimeout(timeoutId);
				slider(i);
				/**
				 * Interval Slider
				 * @type {number}
				 */
				timeoutId = setTimeout(function () {
					timerId = setInterval(slider, sliderLiveTimer);
				}, disappearanceTime);
			}
		});
	}

	for (var i = 0; i < sliderNavLength; i++) {
		sliderNavClick(i);
	}
	var timerId = setInterval(slider, sliderLiveTimer);
	setSliderItemStyle(sliderImg, sliderOn, 3, 1);
	if (sliderText) {
		setSliderItemStyle(sliderText, sliderOn, 5, 1);
	}

});