function Checker(color, player) {
  this.color = color;
  this.player = player;
  this.moves = [];
}

Checker.prototype.addMove = function(move) {
  this.moves.push(move)
}

function King(color, player) {
  this.color = color;
  this.player = player;
  this.moves = [];
}

King.prototype.addMove = function(move) {
  this.moves.push(move)
}

const checker = new Checker('white', 'Mateusz');
const king = new King('black', 'Anna')

console.log(checker, king, checker.addMove === king.addMove)