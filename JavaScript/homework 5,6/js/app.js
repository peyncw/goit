"use strict";
var mSecDate,
	mSec = 0,
	sec = 0,
	min = 0,
	hour = 0,
	setId,
	tTimer,
	nItem = 0,
	counter = document.getElementById("counter"),
	counterMs = document.getElementById("counterMs"),
	splitList = document.getElementById("list"),
	startPause = document.getElementById("startPause"),
	split = document.getElementById("split"),
	clear = document.getElementById("clear");
/**
 * Проверяет не меньше время 10, если да, то добавляеться ноль перед set.
 * @param set время мс, сек, мин, час.
 * @returns {string} время с добавлением нуля.
 */
function ifCounter(set) {
	if (set < 10) {
		set = "0" + set;
	}
	return set;
}
/**
 * Проверяет не меньше время 100, если да, то добавляетья ноль перед set.
 * @param set время мс.
 * @returns {string} время с добавлением нуля.
 */
function mSecIf(set) {
	if (set < 100) {
		set = "0" + set;
	}
	return set;
}
/**
 * Добавляет к элементу DOM класс и событие.
 * @param set элемент DOM, например button.
 * @param {String} classI название класса.
 * @param inn функция события.
 */
function setClassEvent(set, classI, inn) {
	set.setAttribute("class", classI);
	set.addEventListener("click", inn);
}
/**
 * Таймер для setInterval()
 * Использует мс, сек, мин, час
 * Выводит время в элемент DOM id = counter, counterMs.
 */
function startTimer() {
	tTimer = {
		mSec: mSecIf(ifCounter(mSec)),
		sec: ifCounter(sec),
		min: ifCounter(min),
		hour: ifCounter(hour)
	};
	mSec = new Date().getTime() - mSecDate;
	if (mSec > 999) {
		mSecDate = new Date().getTime();
		mSec = 0;
		sec++;
	}
	switch (60) {
		case sec:
			sec = 0;
			min++;
			break;
		case min:
			min = 0;
			hour++;
			break;
	}
	if (hour > 99) {
		hour = 0;
	}
	counter.innerHTML = tTimer.hour + ":" + tTimer.min + ":" + tTimer.sec;
	counterMs.innerHTML = tTimer.mSec;
	if (tTimer.mSec > 1) {
		setClassEvent(split, "split", splitWrite);
	}
}
/**
 * Пауза, выводит время СТОП в элемент DOM id = list.
 * Останавливает таймер.
 */
function pausaTimer() {
	stopWrite();
	split.setAttribute("class", "split-not-active");
	split.removeEventListener("click", splitWrite);
	clearInterval(setId);
	startPause.removeEventListener("click", pausaTimer);
	startPause.innerHTML = "Start";
	startPause.removeAttribute("class");
	setClassEvent(startPause, "start-pause", eventStart);
}
/**
 * Старт для таймера. И смена кнопки СТАРТ на СТОП.
 */
function eventStart() {
	if (mSec < 1) {
		mSecDate = new Date().getTime();
	}
	startPause.removeEventListener("click", pausaTimer);
	startPause.removeEventListener("click", eventStart);
	setId = setInterval(startTimer, 50);
	startPause.innerHTML = "Stop";
	setClassEvent(startPause, "start-pause__pause", pausaTimer);
}
/**
 * Добаления сплита СТОП в элемент DOM id = list.
 */
function stopWrite() {
	splitIn("STOP");
}
/**
 * Добаления сплита СПЛИТ в элемент DOM id = list.
 */
function splitWrite() {
	splitIn("SPLIT");
}
/**
 * Добаления сплита SET в элемент DOM id = list.
 * @param {String} set текстовое слово которое выводится в начале Сплита.
 */
function splitIn(set) {
	var listItem = document.createElement("div");
	listItem.innerHTML = set + " " + nItem + ". " + tTimer.hour + " hour " + tTimer.min + " min " + tTimer.sec + " sec " + tTimer.mSec + " ms ";
	nItem++;
	listItem.setAttribute("class", "list__item");
	splitList.appendChild(listItem);
}
/**
 * Обнуление таймера до 00:00:00 000 мс, удаление всех сплитовю
 * Приводит к изначальному виду.
 */
function clearTimer() {
	pausaTimer();
	mSec = 0;
	sec = 0;
	min = 0;
	hour = 0;
	startTimer();
	var list_item = splitList.querySelectorAll(".list__item");
	for (var i = 0; i < nItem; i++) {
		splitList.removeChild(list_item[i]);
	}
	nItem = 0;
	startPause.removeEventListener("click", pausaTimer);
	clearInterval(setId);
	setClassEvent(startPause, "start-pause", eventStart);
	startPause.innerHTML = "Start";
}
startPause.addEventListener("click", eventStart);
clear.addEventListener("click", clearTimer);