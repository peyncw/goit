"use strict";
document.addEventListener("DOMContentLoaded", function () {
	function Human() {
		this.name = "Vadim";
		this.age = 22;
		this.gender = "man";
		this.height = "180 cm";
		this.weight = "95 kg";
	}

	function Worker() {
		this.job = "job";
		this.salary = "salary";
		this.work = function(job, salary) {
			this.job = job;
			this.salary = salary;
		}
	}

	Worker.prototype = new Human();
	var worker = new Worker();

	function Student() {
		this.study = "study";
		this.scholarship = "scholarship";
		this.watchSerial = function(study, scholarship) {
			this.study = study;
			this.scholarship = scholarship;
		}
	}

	Student.prototype = new Human();
	var student = new Student();


	console.log(student.age, worker.gender);
	console.log("************************************");
	console.log(student.study, student.scholarship);
	student.watchSerial("KPI", "800uah");
	console.log(student.study, student.scholarship);
	console.log("************************************");
	console.log(worker.job, worker.salary);
	worker.work("student", "5000$");
	console.log(worker.job, worker.salary);
	console.log("************************************");





});


$(function () {

	var word,
		submit = $("#submit");

	function search() {
		$(".img").remove();
		word = $("#word").val();
		$.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q=" + word + "&image_type=photo",
			function (data) {
				console.log(data);
				$.each(data.hits, function (i, item) {
					$("<div class='img'>").append($("<img/>").css("maxHeight", "200px").attr("src", item.webformatURL))
						.appendTo(".append");
				});
			});
	}

	submit.click(function (e) {
		e.preventDefault();
		search();
	});

	$("#word").keydown(function (e) {
			if (e.which == 13) {
				search();
			}
		}
	);

});

