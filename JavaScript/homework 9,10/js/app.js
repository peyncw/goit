"use strict";
$(function () {
	$('.jcarousel').jcarousel().jcarouselAutoscroll({
		interval: 1000,
		target: '+=1',
		autostart: true
	});
	$('.jcarousel-control-prev').click(function (event) {
		$('.jcarousel').jcarousel('scroll', '-=1');
		event.preventDefault();
	});
	$('.jcarousel-control-next').click(function (event) {
		event.preventDefault();
		$('.jcarousel').jcarousel('scroll', '+=1');
	});
	$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function () {
			$(this).addClass('jcarousel-pagination__active');
		})
		.on('jcarouselpagination:inactive', 'a', function () {
			$(this).removeClass('jcarousel-pagination__active');
		})
		.jcarouselPagination({
			item: function (page) {
				return '<a href="#' + page + '"></a>';
			}
		});
	var params = {
		changedEl: "select"
	};
	cuSel(params);
	/**
	 * Чекбокс
	 */
	$(".label-check").mousedown(
		function () {
			var $index = $(this).index();
			changeCheck($(".niceCheckbox").eq($index));
		}
	);
	$(".label-check").each(
		function () {
			var $index = $(this).index();
			changeCheckStart($(".niceCheckbox").eq($index));
		}
	);
	$(".niceCheckbox").mousedown(
		/* при клике на чекбоксе меняем его вид и значение */
		function () {
			changeCheck($(this));
		});
	$(".niceCheckbox").each(
		/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
		function () {
			changeCheckStart($(this));
		});
	/**
	 * Menu > 3 Submenu
	 */
	var $hideJSub = $(".menu__JSub > li ul"),
		$leftJSub = $(".menu__JSub > li li ul"),
		$JSubItem = $(".menu__JSub a"),
		$JSubColor = $(".menu__JSub ul").css("backgroundColor"),
		$hJSub = $hideJSub.height(),
		$wJSub = $hideJSub.width(),
		/**
		 * horizontal animate
		 * @type {{a: {height: *}, d: {height: string, overflow: string}}}
		 */
		jSubAH = {
			a: {
				height: $hJSub
			},
			d: {
				height: "0",
				overflow: "hidden"
			}
		},
		/**
		 * vertical animate
		 * @type {{a: {width: *}, d: {width: string, overflow: string}}}
		 */
		jSubAW = {
			a: {
				width: $wJSub
			},
			d: {
				width: "0",
				overflow: "hidden"
			}
		};
	console.log($JSubColor);
	$hideJSub.hide();
	$leftJSub.css({
		left: $wJSub
	});
	$JSubItem.mouseenter(function () {
		var $this = $(this).siblings("ul");
		aJSub($this, jSubAH, "#3C5CFF", 100);
		$(this).mouseleave(function () {
			$this.css({
				overflow: "visible"
			});
		});
		$this.parent().mouseleave(function () {
			$this.hide();
			$this.css("backgroundColor", "" + $JSubColor);
		});
	});
});
/**
 * MenuJSub function for animate
 */
function aJSub(element, animate, color, time) {
	element.css(animate.d);
	element.show();
	element.animate(animate.a, time);
	element.animate({
		backgroundColor: color
	}, (time * 4));
}
function changeCheck(el)
/*
 функция смены вида и значения чекбокса
 el - span контейнер дял обычного чекбокса
 input - чекбокс
 */ {
	var el = el,
		input = el.find("input").eq(0);
	if (!input.attr("checked")) {
		el.css("background-position", "0 -17px");
		input.attr("checked", true)
	} else {
		el.css("background-position", "0 0");
		input.attr("checked", false)
	}
	return true;
}

function changeCheckStart(el)
/*
 если установлен атрибут checked, меняем вид чекбокса
 */ {
	var el = el,
		input = el.find("input").eq(0);
	if (input.attr("checked")) {
		el.css("background-position", "0 -17px");
	}
	return true;
}
function changeCheck(el)
/*
 функция смены вида и значения чекбокса
 el - span контейнер дял обычного чекбокса
 input - чекбокс
 */ {
	var el = el,
		input = el.find("input").eq(0);
	if (!input.attr("checked")) {
		el.css("background-position", "0 -17px");
		input.attr("checked", true)
	} else {
		el.css("background-position", "0 0");
		input.attr("checked", false)
	}
	return true;
}

function changeCheckStart(el)
/*
 если установлен атрибут checked, меняем вид чекбокса
 */ {
	var el = el,
		input = el.find("input").eq(0);
	if (input.attr("checked")) {
		el.css("background-position", "0 -17px");
	}
	return true;
}



