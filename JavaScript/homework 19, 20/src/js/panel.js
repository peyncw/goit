"use strict";
document.addEventListener("DOMContentLoaded", function () {
	var panel = document.querySelector(".section2__panel"),
		panelA = panel.querySelectorAll("li > a"),
		panelSpan = panel.querySelectorAll("li > a > span"),
		panelP = panel.querySelectorAll("li > p"),
		panelLength = panelA.length,
		prePanel = 0;

	/**
	 * Show or hide element
	 * @param element DOM element
	 */
	function toggle(element) {
		element.style.display = (element.style.display == "none" || element.style.display == "") ? "block" : "none";
	}

	/**
	 * Set active CSS class and change of minus to plus
	 * @param {Number} i index of array of elements
	 */
	function clickPanel(i) {
		panelA[i].classList.toggle("section2__panel-active");
		panelSpan[i].innerHTML = (panelSpan[i].innerHTML == "+") ? "-" : "+";
		toggle(panelP[i]);
	}

	/**
	 * Event click
	 * hide pre panel prePanel, show i panel
	 * @param {Number} i index of array of elements
	 */
	function togglePanel(i) {
		panelA[i].addEventListener("click", function (e) {
			e.preventDefault();
			if (i !== prePanel) {
				clickPanel(prePanel);
				clickPanel(i);
			}
			prePanel = i;
		})
	}

	for (var i = 0; i < panelLength; i++) {
		togglePanel(i);
	}

});