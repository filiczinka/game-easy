const playToSelect = document.getElementById('score__points');
let isGameOver = false;
let winnerScore = 5;
const resetBtn = document.querySelector('.btn__reset');

const p1 = {
	score: 0,
	button: document.querySelector('.btn__one'),
	display: document.querySelector('.player1'),
}

const p2 = {
	score: 0,
	button: document.querySelector('.btn__two'),
	display: document.querySelector('.player2'),
}

function updatesScore(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
	} if (player.score === winnerScore) {
		isGameOver = true;
		player.display.classList.add('winner');
		opponent.display.classList.add('looser');
		player.button.disabled = true;
		opponent.button.disabled = true;
	}
	player.display.textContent = player.score;
}

p1.button.addEventListener('click', function () {
	updatesScore(p1, p2);
});

p2.button.addEventListener('click', function () {
	updatesScore(p2, p1);
});

playToSelect.addEventListener('change', function () {
	winnerScore = parseInt(this.value);
	reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	p1.score = 0;
	p2.score = 0;
	p1.display.textContent = p1.score;
	p2.display.textContent = p2.score;
	p1.display.classList.remove('winner', 'looser');
	p2.display.classList.remove('winner', 'looser');
	p1.button.disabled = false;
	p2.button.disabled = false;
}