document.getElementById("start-game-button").onclick = function () {
  hangman = new Hangman();
  //recogemos el evento de la tecla keyDown()
  //compruebo si esta dentro del rango que son letras 65 al 90
  //var = compruebo si he acertado --> true o false
  //true --> Pinto la letra 
  //false --> Pinto una figura de las que estan en el array Error Draw

  var palabra = hangman._getWord();
  console.log(palabra)
  hangmanCanvas = new HangmanCanvas(palabra);
  hangmanCanvas._drawLines();
  };
 



document.onkeydown = function (e) {

};