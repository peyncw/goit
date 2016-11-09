"use strict";
document.addEventListener("DOMContentLoaded", function () {
	function Human() {
		this.name = "Vadim";
		this.age = 22;
		this.gender = "man";
		this.height = "180 cm";
		this.weight = "95 kg";
	}


	Human.prototype.Worker = function (job, salary) {
		this.job = job;
		this.salary = salary;
		console.log(this.job, this.salary);
	};

	Human.prototype.Student = function (study, scholarship) {
		this.study = study;
		this.scholarship = scholarship;
		console.log(this.study, this.scholarship);
	};

	var human = new Human();

	human.Worker("student", "5000$");
	human.Student("KPI", "800UAH");
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

