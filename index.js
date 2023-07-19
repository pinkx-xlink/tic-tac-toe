function Gameboard() {

    const board = [];
}

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winning<essageTextElement = 
let circleTurn

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    //palceMark
    //check for Win
    //check for Draw
    //switch turns
    swapTurns()
    setBoardHoverClass()
}

function endGame(draw) {
    if (draw) {

    } else {

    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}







// let array = [1, 2, 3];
// let button = document.querySelector("#gameBtn");
// button.addEventListener("click", updateArray);

// function updateArray() {
//     array.push(4);
//     console.log(array);
// }


// const takeTurn = (array, player) => {

// }

// const addMark = (player) => {
//     value = player;
// }

// const getValue = () => value;

// return {
//     addMark,
//     getValue;
// };
// // } 