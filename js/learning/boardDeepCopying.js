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

 
    const checker = {
      color: 'white',
      player: 'mateusz',
      moves: []
    }

    const board = [
      ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
      ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
      ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
      ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
      ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
      ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
      ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
      ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'],
      ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
      ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
    ]

    board[6][1] = JSON.parse(JSON.stringify(checker)); // ten będzie się ruszał
    board[6][7] =  JSON.parse(JSON.stringify(checker)); // ten zostaje bez zmian

    
    board[5][2] = board[6][1]; //przestawiam na nowe pole
    board[6][1] = '61'; // ustawiam wartość dla poprzedniego pola 
    board[5][2].moves.push('61-52') // wprowadzam informacje o przesunięciu
    console.log(board[6][7])
    console.log(board[5][2])
    console.log(board[6][7] === board[5][2])
  }
}
