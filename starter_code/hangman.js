var hangman;

function Hangman() {
  this.words = ['Hola',"Adios","TengoPalabras"];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = [];
  this.errorsLeft = [10];

}

Hangman.prototype._getWord = function () {
  var num = Math.floor(Math.random()* (this.words.length));
  console.log(this.words[num]);//Sacar un valor random del array
  var palabra = this.words[num];
  return palabra;
};

Hangman.prototype._checkIfLetter = function (keyCode) {
  if ((keyCode > 65) && (keyCode < 90)) {
    return true;
  } else {
    return false;
  }
  return keyCode;
};

Hangman.prototype._checkClickedLetters = function (key) {

  if (this.letters.includes(key)) {
    return false;
  } else {
    this.letters.push();
    return true;
  }
};

Hangman.prototype._addCorrectLetter = function (i) {
  
this.guessedLetter = (this.secretWord.chartart(i).toUpperCase());

};

Hangman.prototype._addWrongLetter = function (letter) {
this.errorsLeft -= 1;
};

Hangman.prototype._checkGameOver = function () {
if(this.errorsLeft.length = 0){
return  true;
} else {
  return false;
}
};

Hangman.prototype._checkWinner = function () {
  if ( this.secretWord.length  >=  this.guesssedLetter.length ) {
    return  true ;
  } else {
    return  false ;
  }
};

