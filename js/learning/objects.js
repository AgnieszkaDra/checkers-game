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

function Checker(color, player) {
    this.color = color;
    this.player = player;
    this.moves = [];
}

const checker = new Checker('White', 'Anna')
console.log(checker.color)
console.log(checker['color'])

const propName = 'color';
console.log(checker.propName);
console.log(checker[propName])

for(const key in checker) {
    console.log(key)
}

for(const key in checker) {
    const value = checker[key]
    console.log(value)
}

for(const propName in checker) {
    console.log(`${propName} => ${checker[propName]}`)
}

// mimo, ze obiekty same w sobie nie są policzalne
// to w pętli for...of możemy wykorzystać kilka metod dostępnych w konstruktorze
// obiektu Object i w ten sposób "dostać się" do kluczy, wartości lub obu rzeczy jednocześnie

for(const value of Object.values(checker)){
    console.log(value)
}

for(const key of Object.keys(checker)){
    console.log(key)
}

for(const entry of Object.entries(checker)) {
    const [key, value] = entry;
    console.log(key, value)
}

// Object.defineProperty(checker, 'color', 
//     {
//         value: 'white',
//         writable: true,
//         enumerable: false,
//         configurable: false
//     }
// )

console.log(Object.keys(checker))
// console.log(delete checker.color)

function Checker2(color, player) {
    this.player = player;
    this.moves = [];
    this.color = color;

    Object.defineProperty(this, 'color', {
        get() {
            return this._color;
        },
        set(value) {
            const correctColors = ['white', 'black'];
            if (!correctColors.includes(value)) {
                throw new Error('Invalid color');
            }
            this._color = value;
        },
        configurable: true,
        enumerable: true
    });
}

const checker2 = new Checker2('', 'Player1');
checker2.color = 'white';
// checker2.color = 'red'; // Uncommenting this line will throw an error
console.log(checker2);


// destrukturyzacja 
const { moves, player: pName } = checker
moves.push('61-52')

const { ...others } = checker;
moves.push('61-52');

console.log(others)

const arr = [1,2,3];
const [firstItem, , thirdItem] = arr

const obj = { arr: [1,2,3]};
const {
    arr: [firstItem3, ,thirdItem3 ]
} = obj

const moves2 = ['61-52', '52-43', '43-32']
delete moves2[1];
console.log(moves);
console.log(Object.keys(moves));
console.log(moves.length) // delete - length of an array still will be 3

//splice
moves2.splice(1,1); // length of an array will be 2

// for...of of an array and looks like array elements ex. NodeList returns by querySelector

const moves3 = ['67-8', '67-10', '43-32']
for(const move of moves3) {
    console.log(move)
}

      }
}


