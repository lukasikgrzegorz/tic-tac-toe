let gameArea = [0,0,0,0,0,0,0,0,0];

const whenWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let playerSign = 1;
let foeSign = 2;
let gameActive = 0;

let randomNumber = 0;

let moveCounter = 0;

let winFlag = 0;