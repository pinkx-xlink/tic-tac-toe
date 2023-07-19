function Gameboard() {

    const board = [];
}

const cellElements = document.querySelectorAll('[data-cell]')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
    //palceMark
    //check for Win
    //check for Draw
    //switch turns
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