// Point du round en cours
let round = 0;

// Score global des joueurs
let globalScorePlayer1 = 0;
let globalScorePlayer2 = 0;

// Round playerOne = true playerTwo = false
let roundIsPlayer = true;

styleCircle = `width: 20px;
height: 20px;
border-radius: 20px;
background: rgb(224, 78, 70);
margin-left: 1rem;
margin-top: 0.5rem;`;

// Button relancer une partie
const btnNewGame = document.getElementById('new-game');

// Dé
const dice = document.getElementById('dice');

// Joueurs
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');

// Tour des joueurs
const turnPlayerOne = document.getElementById('turnPlayer1');
const turnPlayerTwo = document.getElementById('turnPlayer2');

// Scores des joueurs de la parties
const scorePlayerOne = document.getElementById('score-player1');
const scorePlayerTwo = document.getElementById('score-player2');

// Bouton lancer le dé
const btnRollDice = document.getElementById('btn-roll');

// Button recolter le score
const btnHold = document.getElementById('btn-hold');

// Scores des joueurs du round
const roundPlayerOne = document.getElementById('round-player1');
const roundPlayerTwo = document.getElementById('round-player2');

// Modals des joueurs
const modalPlayerOne = document.getElementById('modal-joueur1');
const modalPlayerTwo = document.getElementById('modal-joueur2');

// Event Relancer une nouvelle partie en reload la page
btnNewGame.addEventListener('click', () => {
  replayGame();
});

// Event lance le dé
btnRollDice.addEventListener('click', () => {
  rollDice();
});

// Event collecter les points
btnHold.addEventListener('click', () => {
  holdPoint();
  round = 0;
  roundPlayerOne.innerHTML = '0';
  roundPlayerTwo.innerHTML = '0';
});

/**
 * Lancer le dé de manière aléatoire
 */
function rollDice() {
  let number = Math.floor(Math.random() * 7);

  if (number === 1) {
    dice.src = 'images/dice-six-faces-one.svg';
    if (roundIsPlayer === true) {
      roundPlayerOne.innerHTML = '0';
      isPlayerTwoToPlay();
      console.log('plus ton tour joueur 1');
    } else if (roundIsPlayer === false) {
      roundPlayerTwo.innerHTML = '0';
      isPlayerOneToPlay();
      console.log('plus ton tour joueur 2');
    }
    round = 0;
  } else if (number === 2) {
    dice.src = 'images/dice-six-faces-two.svg';
    round += 2;
  } else if (number === 3) {
    dice.src = 'images/dice-six-faces-three.svg';
    round += 3;
  } else if (number === 4) {
    dice.src = 'images/dice-six-faces-four.svg';
    round += 4;
  } else if (number === 5) {
    dice.src = 'images/dice-six-faces-five.svg';
    round += 5;
  } else {
    dice.src = 'images/dice-six-faces-six.svg';
    round += 6;
  }
  if (roundIsPlayer === true) {
    roundPlayerOne.innerHTML = round;
  } else {
    roundPlayerTwo.innerHTML = round;
  }
}

/**
 * Collecter les points du round vers le global
 */
function holdPoint() {
  if (roundIsPlayer === true) {
    globalScorePlayer1 += round;
    scorePlayerOne.innerHTML = globalScorePlayer1;
    checkPointGlobal();
    isPlayerTwoToPlay();
  } else {
    globalScorePlayer2 += round;
    scorePlayerTwo.innerHTML = globalScorePlayer2;
    checkPointGlobal();
    isPlayerOneToPlay();
  }
}

/**
 * Le round au tour du joueur 1
 */
function isPlayerOneToPlay() {
  roundIsPlayer = true;
  turnPlayerTwo.style = '';
  turnPlayerOne.style = styleCircle;
}
/**
 * Le round au tour du joueur 2
 */
function isPlayerTwoToPlay() {
  roundIsPlayer = false;
  turnPlayerOne.style = '';
  turnPlayerTwo.style = styleCircle;
}

/**
 * Vérifie le gagnant
 */
function checkPointGlobal() {
  if (globalScorePlayer1 >= 100) {
    modalPlayerOne.style.display = 'block';
  } else if (globalScorePlayer2 >= 100) {
    modalPlayerTwo.style.display = 'block';
  }
}

/**
 * Rafraichi la page
 */
function replayGame() {
  window.location.reload();
}
