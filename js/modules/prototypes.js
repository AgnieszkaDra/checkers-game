import { Game } from "./modules/game.js";
import { Board } from "./modules/board.js";

document.addEventListener("DOMContentLoaded", function () {
  const appContainerRef = document.getElementById("app");

  if (!appContainerRef) {
    throw new Error("App container not found!");
  }

  const board = new Board(appContainerRef);
  const game = new Game({ board });

  function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
  }

  // prototype members
  Checker.prototype.addMove = function(move) {
    this.moves.push(move)
  }

  const checker1 = new Checker('white', 'Anna');
  const checker2 = new Checker('white', 'Anna');
  // const checker3 = new Checker('white', 'Anna')
  // checker3.addMove('a2-a4')

  const prototype1 = Object.getPrototypeOf(checker1)
  const prototype2 = Object.getPrototypeOf(checker1)

  console.log(prototype1)
  console.log(prototype1 === checker1.__proto__) // not recommended
  console.log(checker1.toString())
  console.log('toString' in checker1, 'in checker')
  console.log('toString' in prototype1, 'in prototype')

  console.log(Object.getOwnPropertyNames(checker1), 'checker own property names')
  console.log(Object.getOwnPropertyNames(prototype1), 'prototype own property names')

  console.log(checker1 === checker2, 'checkers')
  console.log(prototype1 === prototype2, 'prototypes')

  for(const key in checker1) {
    console.log(key)
    // color
    // player
    // moves 
    // addMove
  } 
  // iteracja po wszystkich elementach obiektu i prototypu

  for(const key in checker1) {
    console.log(key)
    // color
    // player
    // moves 
    // addMove
  } 

  console.log(Object.keys(checker1)) 
  // ['color', 'player', 'moves']

  for(const key in checker1) {
    if (checker1.hasOwnProperty(key)) {
      console.log(key, checker1[key])
    }
    // color
    // player
    // moves 
  } 

  // tak nie robimy!
  // Array.prototype.shuffle = function() {
  // this.sort(() => Math.random() >= 0.5 ? 1 : -1)
  // }

  function MoreThanArray() {
    // ...
  }

  MoreThanArray.prototype = new Array();
  MoreThanArray.prototype.shuffle = function() {
    this.sort(() => Math.random() >= 0.5 ? 1 : -1)
  }

  const MoreThanArray = new MoreThanArray();
  MoreThanArray.push(1, 2, 3, 4, 5);
  MoreThanArray.shuffle()
  game.init();

});