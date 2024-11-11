export class Board {
    boardRef = null;
  
    constructor(boardRef) {
      this.boardRef = boardRef;
    }
  
    initBoard() {
      this.createBoard();
      console.log("Board initialized");
    }
  
    createBoard() {
      const boardGrid = document.createElement("div");
      boardGrid.id = "board";

      // 1 - asocjacja - luźna relacja
  
      class Player {
        // ...
      }

      class Game {
        addPlayer(p /* Player */){

        }
      }

      const player = new Player("John");
      const game = new Game();
      game.addPlayer(player)

      // 2 - agregacja - klasa piece jest częścią klasy field
      class Piece {
        // ...
      }
      class Field {
        constructor(piece) {
            this.piece = piece
        }
      }

      const piece = new Piece();
      const field = new Field(piece);

      // 3 - kompozycja - obiekty klasy B(field) żyją i umierają z klasą A(Board)

      class Field {
        // ...
      }

      class Board {
        constructor() {
            this.field1 = new Field();
            this.field2 = new Field();
        }
      }

      const b = new Board()

      // Dziedziczenie 
      class Piece {
        isCorrectMove() {}
      }

      class Checker extends Piece {}
      const checker = new Checker();
      checker.isCorrectMove();

    this.boardRef.appendChild(boardGrid);
    }
  }
  