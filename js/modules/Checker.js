import Piece from './Piece.js'
export default class Checker extends Piece {}

//     Object.defineProperty(this, 'player', {
//         get() {
//             return this._player;
//         },
//         set(value) {
//             this._player = value;
//         }
//     })
//     Object.defineProperty(this, 'name', {
//         get() {
//             return this.constructor.name
//         }
//     })

//     this.player = player
// }

// export default function Checker(player) {
//     Piece.call(this, player);
// }

// Checker.prototype = Object.create(Piece.prototype);
// Checker.prototype.constructor = Checker
// // function Checker(color, player) {
// //     this.color = color;
// //     this.player = player;
//     this.moves = [];
//   }
  
//   Checker.prototype.addMove = function(move) {
//     this.moves.push(move)
//   }
  