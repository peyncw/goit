"use strict";
var test = {
		titleOfTest: "Тест по программированию",
		testQuestions: [
			{
				title: "1. Вопрос номер №1",
				answer: ["Вариант ответа номер №1", "Вариант ответа номер №2", "Вариант ответа номер №3"]
			}, {
				title: "1. Вопрос номер №2",
				answer: ["Вариант ответа номер №1", "Вариант ответа номер №2", "Вариант ответа номер №3", "Вариант ответа номер №4"]
			}, {
				title: "1. Вопрос номер №3",
				answer: ["Вариант ответа номер №1", "Вариант ответа номер №2", "Вариант ответа номер №3"]
			},
			{
				title: "1. Вопрос номер №4",
				answer: ["Вариант ответа номер №1", "Вариант ответа номер №2", "Вариант ответа номер №3"]
			},
			{
				title: "1. Вопрос номер №5",
				answer: ["Вариант ответа номер №1", "Вариант ответа номер №2", "Вариант ответа номер №3", "Вариант ответа номер №4", "Вариант ответа номер №5"]
			}
		],
		getTestInDom: function () {
			var form = document.createElement("form");
			form.classList.add("form");
			var h1 = document.createElement("h1");
			h1.classList.add("title__main");
			var bodyForm = document.body.appendChild(form);
			var bodyTag;
			var appendTag;
			bodyForm.appendChild(h1);
			h1.innerHTML = this.titleOfTest;
			for (var i = 0; i < this.testQuestions.length; i++) {
				bodyTag = document.createElement("ul");
				appendTag = bodyForm.appendChild(bodyTag);
				bodyTag = document.createElement("h2");
				appendTag.appendChild(bodyTag);
				bodyTag.innerHTML = this.testQuestions[i].title;
				for (var j = 0; j < this.testQuestions[i].answer.length; j++) {
					bodyTag = document.createElement("li");
					appendTag = bodyForm.querySelectorAll("ul")[i].appendChild(bodyTag);
					bodyTag = document.createElement("label");
					appendTag = appendTag.appendChild(bodyTag);
					bodyTag = document.createElement("input");
					bodyTag.setAttribute("type", "checkbox");
					appendTag.appendChild(bodyTag);
					bodyTag = document.createElement("span");
					appendTag.appendChild(bodyTag);
					bodyTag.innerHTML = this.testQuestions[i].answer[j];
					//исправить, не верное построение!!!
				}
			}
			var inputButton = document.createElement("input");
			inputButton.setAttribute("type", "submit");
			bodyForm.appendChild(inputButton);
		}
	};

test.getTestInDom();


