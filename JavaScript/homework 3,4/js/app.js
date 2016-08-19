"use strict";
var programmingTest = {
	titleOfTest: "Тест по программированию",
	numOfQuestions: 3,
	numOfReplies: 3,
	testArr: [],
	getTestArr: function() {
		for (var i = 0; i < this.numOfQuestions; i++) {
			this.testArr[i] = [];
			for (var j = 0; j < this.numOfReplies; j++) {
				this.testArr[i][j] = "";
			}
		}
		this.testArr[0][0] = "1. Вопрос номер №1";
		this.testArr[0][1] = "Вариант ответа номер №1";
		this.testArr[0][2] = "Вариант ответа номер №2";
		this.testArr[0][3] = "Вариант ответа номер №3";
		this.testArr[1][0] = "2. Вопрос номер №2";
		this.testArr[1][1] = "Вариант ответа номер №1";
		this.testArr[1][2] = "Вариант ответа номер №2";
		this.testArr[1][3] = "Вариант ответа номер №3";
		this.testArr[2][0] = "3. Вопрос номер №3";
		this.testArr[2][1] = "Вариант ответа номер №1";
		this.testArr[2][2] = "Вариант ответа номер №2";
		this.testArr[2][3] = "Вариант ответа номер №3";
		return this.testArr;
	},
	getTestInDom: function() {
		var form = document.createElement("form");
		var h1 = document.createElement("h1");
		h1.classList.add("title__main");
		var bodyForm = document.body.appendChild(form);
		var bodyArr;
		var bodyAppend;
		bodyForm.appendChild(h1);
		h1.innerHTML = this.titleOfTest;
		for  (var i = 0; i < this.numOfQuestions; i++) {
			bodyArr = document.createElement("ul");
			bodyAppend = bodyForm.appendChild(bodyArr);
			bodyArr = document.createElement("h2");
			bodyAppend.appendChild(bodyArr);
			bodyArr.innerHTML = this.testArr[i][0];
			for (var j = 1; j < (this.numOfReplies + 1);j++) {
				bodyArr = document.createElement("li");
				bodyAppend = bodyAppend.appendChild(bodyArr);
				bodyArr = document.createElement("label");
				bodyAppend = bodyAppend.appendChild(bodyArr);
				bodyArr = document.createElement("input");
				bodyArr.setAttribute("type", "checkbox");
				bodyAppend.appendChild(bodyArr);
				bodyArr = document.createElement("span");
				bodyAppend.appendChild(bodyArr);
				bodyArr.innerHTML = this.testArr[i][j];
			}
		}
		var inputButton = document.createElement("input");
		inputButton.setAttribute("type", "submit");
		bodyForm.appendChild(inputButton);
	}
};
console.log(programmingTest.getTestArr());
programmingTest.getTestInDom();

