import Board from "./Board";

try {
    const board = new Board();
    console.log(board.getField('12'));
} catch(e) {
    console.error(e.message)
}