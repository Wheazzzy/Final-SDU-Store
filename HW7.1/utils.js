//get length of a object
function getLength(obj) {
	let index = 0;
	for (const key in obj) index++;

	return index;
}

// convert number to time format
function timeConvert(num) {
	let hours = Math.floor(num / 60);
	let minutes = num % 60;
	minutes = minutes.toString().length == 1 ? "0" + minutes : minutes;
	return hours + ":" + minutes;
}

//create a random array for cards
function createRandomArray(index) {
	const tempArray = [];
	const mainArray = [];
	for (let i = 0; i < index; i++) {
		tempArray.push("first_" + i);
		tempArray.push("second_" + i);
	}

	while (tempArray.length !== 0) {
		const rand = Math.round(Math.random() * (tempArray.length - 1));
		mainArray.push(tempArray[rand]);
		tempArray.splice(rand, 1);
	}

	return mainArray;
}


function playSound(soundName) {
	switch (soundName) {
		case "coin":
			new Audio("").play();
			break;
		case "win":
			new Audio("").play();
			break;
		case "lose":
			new Audio("").play();
			break;
		case "start":
			new Audio("").play();
			break;
		default:
	}
}
