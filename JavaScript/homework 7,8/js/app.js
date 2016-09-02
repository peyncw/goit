"use strict";
$(function () {
	var $tabs = $(".tabs"),
		$tabsItem = $(".tabs__item");
	$tabs.eq(0).show();
	$tabsItem.on("click", function () {
		var $this = $(this);
		$tabs.hide();
		$tabsItem.removeClass("tabs__item--active");
		$this.addClass("tabs__item--active");
		$tabs.eq($this.index()).show();
	});
	var $inputItem = $(".input__item"),
		$showhelp = $(".form__main > button"),
		$title,
		$hint;
	$inputItem.on({
		mouseenter: function () {
			var $this = $(this);
			$(".hint").remove();
			$title = $this.attr('title');
			$hint = $("<div>" + $title + "</div>");
			$hint.addClass("hint");
			$this.parent().append($hint);
			$this.removeAttr("title");
		},
		mouseleave: function () {
			$(".hint").remove();
			$(this).attr("title", $title);
		}
	});
	$showhelp.on("click", function (event) {
		event.preventDefault();
		$title = [];
		for (var i = 0; i < $inputItem.length; i++) {
			$title[i] = $inputItem.eq(i).attr("title");
			$hint = $("<div>" + $title[i] + "</div>");
			$hint.addClass("hint");
			$inputItem.eq(i).parent().append($hint);
		}
	})
});