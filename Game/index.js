const mainDeck = document.getElementById("cards");
const timer = document.getElementById("timer");
const modal = document.getElementById("modal_overlay");
const modalButton = document.getElementById("modal_button");
const modalMessage = document.getElementById("modal_message");
const domScore = document.getElementById("score");

let time;
let level;
let arrayDeck = [];
let foundPair = [];
let firstCard, secondCard;
let score = 0;

//reset cards
function reset() {
	level = 1;
	time = 30;
	score = 0;
	start();
	startTime();
}
// starting game!
function start() {
	mainDeck.innerHTML = "";
	arrayDeck = [...createRandomArray(level * 2)];
	firstCard = secondCard = false;
	foundPair = [];

	//setup a deck on dom and add all eventlistener
	for (const item of arrayDeck) createCard(item);
	for (const item of arrayDeck) clickCard(item);

	console.log(arrayDeck);
}
// if you win you going to next level
function nextLevel() {
	level = level === 6 ? level : ++level;
	time += 50;
	score += 1;
	start();
}

function createCard(id) {
	mainDeck.innerHTML += `<div id="card${id}" class="card"/> `;
}

function clickCard(id) {
	const item = document.getElementById(`card${id}`);

	item.addEventListener("click", () => {
		cardRotate(item, true);
		checkPair(item, item);
	});
}

function checkPair(card) {
	if (card === firstCard || card === secondCard || foundPair.includes(getIdNumber(card))) 
	return;

	if (!firstCard) firstCard = card;
	else secondCard = card;

	// two cards logic
	if (firstCard && secondCard)
		if (getIdNumber(firstCard) !== getIdNumber(secondCard)) {
			cardRotate(firstCard, false);
			cardRotate(secondCard, false);
			firstCard = secondCard = false;
		} else {
			foundPair.push(getIdNumber(card));
			firstCard = secondCard = false;
			score += 1;
			playSound("coin");
			checkWin();
		}
}
// this check on win if win next level cards if lose you lose
function checkWin() {
	if (foundPair.length === arrayDeck.length / 2) {
		playSound("win");
		setTimeout(() => {
			nextLevel();
		}, 1000);
	}
}

function cardRotate(item, enabler) {
	if (enabler) {
		item.classList.add("card_press");
		setTimeout(() => {
			item.textContent = getIdNumber(item);
		}, 400);
	} else {
		setTimeout(() => {
			item.classList.remove("card_press");
			item.textContent = " ";
		}, 1000);
	}
}

function getIdNumber(cardDom) {
	return cardDom.getAttribute("id")[cardDom.getAttribute("id").length - 1];
}

function startTime() {
	const wew = setInterval(() => {
		domScore.textContent = `Score: ${score}`;
		timer.textContent = timeConvert(--time);
		if (time <= 0) {
			modal.classList.toggle("hide");
			modal_message.textContent = " Your Total Score : " + score;
			playSound("lose");
			clearInterval(wew);
		}
	}, 1000);
}

modalButton.addEventListener("click", () => {
	modal.classList.toggle("hide");
	playSound("start");
	reset();
});

// starting point
reset();
