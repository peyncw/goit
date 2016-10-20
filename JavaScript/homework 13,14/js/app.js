"use strict";
document.addEventListener("DOMContentLoaded", function () {
	var tmpl = _.template(document.getElementById("lodashTemplate").innerHTML);

	var obj = {
			obj: {
				title: "Question title",
				questions: [
					{
						title: "Question 1",
						answer: ["answer 1", "answer 2", "answer 3", "answer 4"]
					}, {
						title: "Question 2",
						answer: ["answer 1", "answer 2", "answer 3", "answer 4"]
					}, {
						title: "Question 3",
						answer: ["answer 1", "answer 2", "answer 3", "answer 4"]
					}, {
						title: "Question 4",
						answer: ["answer 1", "answer 2", "answer 3", "answer 4"]
					}
				],
				correctAnswer: [[1, 2], [0, 1], [0, 2], [1, 2]],
				quantityAnswer: 2
			}
		},
		result,
		lodash = document.createElement("div");

	result = JSON.stringify(obj);

	localStorage.setItem("obj", result);

	obj = localStorage.getItem("obj");

	obj = JSON.parse(obj);

	result = tmpl(obj);

	lodash.classList.add("question");
	lodash.innerHTML = result;
	document.body.appendChild(lodash);

	var checkBox = document.querySelectorAll("ul.test input[type=checkbox]"),
		checkBoxLength = checkBox.length,
		checked,
		checkResult = document.getElementById("submitTest"),
		body = document.body;

	for (var i = 0; i < checkBoxLength; i++) {
		/**
		 * event disabled unchoosed inputs [type=checkbox]
		 */
		checkBox[i].addEventListener("click", function () {
			var parent = this.parentElement.parentElement.parentElement,
				check = parent.querySelectorAll("input[type=checkbox]"),
				l = parent.querySelectorAll("input[type=checkbox]:checked"),
				length = check.length;
			for (var n = 0; n < length; n++) {
				if (check[n].checked !== true) {
					(l.length == obj.obj.quantityAnswer) ? check[n].disabled = true : check[n].disabled = false;
				}
			}
		});
	}

	/**
	 * event check of the test
	 */
	checkResult.addEventListener("click", function (e) {
		e.preventDefault();
		checkTest();
	});


	/**
	 * append element to the body
	 * @param elem
	 */
	function appendChildBody(elem) {
		body.appendChild(elem);
	}

	/**
	 * remove the element from the body
	 * @param elem
	 */
	function removeChildBody(elem) {
		body.removeChild(elem);
	}


	/**
	 * function verification test
	 * and creation div result test
	 */
	function checkTest() {
		var checkedTest = body.querySelectorAll("ul.test input[type=checkbox]:checked"),
			checkUl = body.querySelectorAll("ul.test"),
			resultTest = [],
			lengthCheck = checkedTest.length,
			lenghtAnswer = obj.obj.questions.length * obj.obj.quantityAnswer,
			correctAnswer = [],
			answerArr = obj.obj.correctAnswer,
			resultDivArr = [],
			resultDiv = document.createElement("div");

		resultDiv.style = "width: 200px; margin: 0 auto; text-align: centre;";

		for (var i = 0; i < checkUl.length; i++) {
			correctAnswer[i] = [] ;
			resultDivArr[i] = document.createElement("div");
		}

		if (lengthCheck == lenghtAnswer) {
			for (i = 0; i < checkUl.length; i++) {
				for (var r = 0; r < obj.obj.quantityAnswer; r++) {
					correctAnswer[i][r] = (checkUl[i].querySelectorAll("input[type=checkbox]")[answerArr[i][r]]
						.checked !== true) ? 0: 1;
					resultTest[i] = "The answer to the question " + (i+1) + " correctly"
						+ ((++correctAnswer[i][r]) * 50) +"%";
				}
				resultDivArr[i].innerHTML = resultTest[i];
				resultDiv.appendChild(resultDivArr[i]);
			}
			modalWindow(resultDiv);
		} else {
			resultTest = "<h1 style='text-align: center'>You did not answer all questions. " +
				"Please answer all questions!</h1>";
			resultDiv.innerHTML = resultTest;
			modalWindow(resultDiv);
		}
	}

	/**
	 * reload test, checkBox disabled
	 */
	function reloadTest() {
		for (i = 0; i < checkBox.length; i++) {
			checkBox[i].checked = false;
		}
	}

	/**
	 * modal window
	 * @param inner
	 */
	function modalWindow(inner) {
		var modalDiv = document.createElement("div"),
			backgroundDiv = document.createElement("div");
		modalDiv.classList.add("modalWindow");
		modalDiv.appendChild(inner);
		backgroundDiv.style = "position: absolute; top: 0; width: 100%; background: rgba(0, 0, 0, 0.45); height:"+ screen.height +"px;";
		appendChildBody(backgroundDiv);
		appendChildBody(modalDiv);
		backgroundDiv.addEventListener("click", function() {
			removeChildBody(backgroundDiv);
			removeChildBody(modalDiv);
			reloadTest();
		});
	}
});

