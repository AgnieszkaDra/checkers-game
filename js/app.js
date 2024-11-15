import Board from "./modules/Board.js";
import Game from "./modules/Game.js";
import Player from "./modules/Player.js";
import Checker from './modules/Checker.js'

document.addEventListener("DOMContentLoaded", function () {
  // const appContainerRef = document.getElementById("app");

  // if (!appContainerRef) {
  //   throw new Error("App container not found!");
  // }

  const board = new Board();
  const player1 = new Player('Agnieszka');
  const player2 = new Player('Dom')
  console.log(player1, player2)


  const checker1 = new Checker(player1)
  console.log(checker1)
  checker1._player = player1 // unfortunately it works
  console.log(checker1)
  const game = new Game(board, player1, player2);
  console.log(game)
  
  //game.init();
  
});
