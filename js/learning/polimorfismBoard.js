function Piece(color, player) {
    this.color = color;
    this.player = player
    this.moves = [];
}

Piece.prototype.addMove = function(move) {
    this.moves.push(move);
    console.log(this.constructor.name, move)
}

function Checker(color, player) {
    Piece.call(this, color, player)
}


Checker.prototype = Object.create(Piece.prototype);
Checker.prototype.constructor = Checker;
Checker.prototype.addMove = function() {
    console.log('dd')
}


function King(color, player) {
    Piece.call(this, color, player);
}
King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

// function Checker() {
//     this.addCheckerMove = function(move) {
//         console.log(this.constructor.name, move)
//     }
// }

// function King() {
//     king.prototype.addKingMove = function(move) {
//         console.log(this.console.name, move)
//     }
// }

const movesList = [];
movesList.push({ move: '52-43', piece: new Checker('white', 'Ola')})
movesList.push({ move: '01-45', piece: new King('black', 'Anna')})
movesList.push({ move: '67-58', piece: new Checker('purple', 'Ann')})


movesList.forEach(function(field) {
    const { piece, move } = field;

    // if(piece instanceof Checker) {
    //     piece.addCheckerMove(move);
    // } else if(piece instanceof King) {
    //     piece.addKingMove(move)
    // }
    if (piece instanceof Piece) {
        piece.addMove(move)
    }
})