function pow(number, degreeOf) {
	var result = 1;
	if (degreeOf < 0) {
		for (var i = 0; i < -degreeOf; i++) {
			result /= number;
		}
	} else {
		for (i = 0; i < degreeOf; i++) {
			result *= number;
		}
	}
	return result;
}
function isInteger(a) {
	return (a ^ 0) === a;
}
function homeWork1MetodPow() {
	var notIntText = 'Please enter the integer number! Not text! ';
	var number = prompt('Enter the number:', '');
	if (isInteger(+number)) {
		var degreeOf = prompt('Enter the degreeOf ' + number + ':', '');
		if (isInteger(+degreeOf)) {
			console.log('Result:', pow(number, degreeOf));
		}
		else {
			alert(notIntText)
		}
	}
	else {
		alert(notIntText);
	}
}
function homeWork2MetodArrFor() {
	var arrName = [];
	var maxNames = 5;
	for (var i = 0; i < maxNames; i++) {
		var addName = prompt('Enter the name ' + (i + 1) + ':', '');
		if (isNaN(+addName)) {
			addName = addName[0].toUpperCase() + addName.substr(1).toLowerCase();
			arrName.push(addName);
		} else {
			alert('Please enter Text Name! Not number!');
			break;
		}
	}
	var arrNameLength = arrName.length;
	if (arrNameLength === 5) {
		while (true) {
			var searchName = prompt('Enter the Search Name:', '');
			if (isNaN(searchName)) {
				searchName = searchName[0].toUpperCase() + searchName.substr(1).toLowerCase();
				console.log(searchName);
				if (arrName.indexOf(searchName) != -1) {
					alert('Hello ' + searchName + '!');
					break;
				}
				else {
					alert('This name Not found!');
				}
			}
			else {
				alert('Repeat please!');
			}
		}
	}
}
function getHomeWork() {
	var homework = prompt('Enter the homework, 1 or 2:', '');
	switch (+homework) {
		case 1:
			homeWork1MetodPow();
			break;
		case 2:
			homeWork2MetodArrFor();
			break;
		default:
			alert('Not homework!');
	}
}
getHomeWork();



