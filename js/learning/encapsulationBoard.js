export default function Board() {
  this.fieldsList = [
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
  // właściwość w funckji board
}

Board.prototype.getField = function(coords) {
  const [rowIndex, colIndex] = coords;
  return this.fieldsList[rowIndex][colIndex]
}

Board.prototype.setField = function(coords, value) {
  const [rowIndex, colIndex] = coords;
  this.fieldsList[rowIndex][colIndex] = value;
}

const board = new Board();
console.log(board.getField('12'))

// Enkapsulacja - w obrębie jednego elementu - tutaj mamy konstruktro mamy i dane i metody. 