function pow(number, degreeOf) {
	var result = 1;
	for (var i = 0; i < degreeOf; i++) {
		result *= number;
	}
	return result;
}
function isIteger(a) {
	return (a ^ 0) === a;
}
function homeWork1MetodPow() {
	var notIntText = 'Please enter the integer number! Not text! ';
	var number = prompt('Enter the number:', '');
	if (isIteger(+number)) {
		var degreeOf = prompt('Enter the degreeOf ' + number + ':', '');
		if (isIteger(+degreeOf)) {
			console.log('Result:', pow(number, degreeOf));
		}
		else {
			alert(notIntText)
		}
	}
	else
		{
			alert(notIntText);
		}
}
function homeWork2MetodArrFor() {
	var arrName = [];
	for (var n = 0; n < 5; n++) {
		var addName = prompt('Enter the name ' + (n + 1) + ':', '');
		if (typeof(1) != typeof(+addName)||isNaN(+addName)){
			arrName.push(addName);
		} else {
			alert('Please enter Text Name! Not number!');
			n = 4;
		}
	}
	if (arrName.length === 5 ) {
		for (var i = 0; i < arrName.length; i++) {
			var searchName = prompt('Enter the Search Name:', '');
			if (searchName === arrName[i] || arrName[i] [0].toLowerCase()) {
				alert('Hello ' + arrName[i] + '!');
				i = arrName.length;
			} else {
				alert('This name Not found!');
			}
		}
	} else {
		alert('Repeat please!');
	}
}
var homework = prompt('Enter the homework, 1 or 2:', '');
switch (+homework) {
	case 1: homeWork1MetodPow();
		break;
	case 2: homeWork2MetodArrFor();
		break;
	default: alert('Not homework!');
}



