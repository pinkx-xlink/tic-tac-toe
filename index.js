function Gameboard() {
    let array = [1, 2, 3];
    let button = document.querySelector("#gameBtn");
    button.addEventListener("click", updateArray);
    const board = [];
}

function updateArray() {
    array.push(4);
    console.log(array);
}

const getBoard = () => board;

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