"use strict";
$(function () {
	$(".peyCarousel").peyCarousel({
		autoScroll: "off",
		speedScroll: 3000,
		sliderView: "rising",
		displaySlider: 5
	});
	var tmpl = _.template(document.getElementById("template").innerHTML),
		div = document.createElement("div"),
		homework1 = tmpl({
			container1: {
				title: "Заволокин Вадим Геннадьевич",
				photo: "images/img1.jpg",
				about: "Студент GOIT"
			},
			container2: {
				title: "Хочу учить фронтенд, потому что ",
				about: [
					"какой то текст1",
					"какой то текст2",
					"какой то текст3"
				]
			},
			container3: {
				title1: "Мой номер",
				sameText1: "0934959039",
				title2: "Мой профиль вк",
				sameText2: {
					title: "vk.com",
					link: "https://vk.com/"
				}
			},
			container4: {
				title: "Мой фидбек",
				sameText: "Какой то текст про фидбек"
			}
		});
	div.classList.add("Lodash");
	div.innerHTML = homework1;
	document.body.appendChild(div);
});
