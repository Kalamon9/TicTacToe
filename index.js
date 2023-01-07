"use strict";

// const box = document.getElementById("1");
// console.log(box);
// box.addEventListener("click", function () {
//   box.classList.add("active");
//   box.textContent = "X";
// });

const boxes = document.querySelectorAll("h1 + div > div");
// console.log(boxes[1]);

let activePlayer = "X";

let value1;
let value2;
let value3;
let value4;
let value5;
let value6;
let value7;
let value8;
let value9;

const winnerMessage = () => {
  document.querySelector("h1").textContent = "Winner!";
};
// don't allow more moves
const disableBoxes = () => {
  boxes.forEach((element) => element.classList.add("disabled"));
};
const winner = () => {
  winnerMessage();
  disableBoxes();
};

for (let i = 0; i < boxes.length; i++)
  boxes[i].addEventListener("click", function () {
    boxes[i].classList.add("active");
    if (activePlayer === "X") {
      boxes[i].textContent = "X";
      boxes[i].classList.add("disabled");
      activePlayer = "O";
    } else {
      boxes[i].textContent = "O";
      boxes[i].classList.add("disabled");
      activePlayer = "X";
    }

    value1 = boxes[0].textContent;
    value2 = boxes[1].textContent;
    value3 = boxes[2].textContent;
    value4 = boxes[3].textContent;
    value5 = boxes[4].textContent;
    value6 = boxes[5].textContent;
    value7 = boxes[6].textContent;
    value8 = boxes[7].textContent;
    value9 = boxes[8].textContent;

    const checkWin = () => {
      if (value1 != "" && value1 === value2 && value1 === value3) {
        for (let j = 0; j <= 2; j++) {
          boxes[j].classList.add("won");
        }
        //   boxes[0].classList.add("won");
        //   boxes[1].classList.add("won");
        //   boxes[2].classList.add("won");
        winner();
      } else if (value4 != "" && value4 === value5 && value4 === value6) {
        for (let k = 3; k <= 5; k++) {
          boxes[k].classList.add("won");
        }
        winner();
      } else if (value7 != "" && value7 === value8 && value7 === value9) {
        for (let l = 6; l <= 8; l++) {
          boxes[l].classList.add("won");
        }
        winner();
      } else if (value1 != "" && value1 === value4 && value1 === value7) {
        // for (let i = 0; i <= 6; i + 3) {
        //   boxes[i].classList.add("won");
        // }
        boxes[0].classList.add("won");
        boxes[3].classList.add("won");
        boxes[6].classList.add("won");
        winner();
      } else if (value2 != "" && value2 === value5 && value2 === value8) {
        boxes[1].classList.add("won");
        boxes[4].classList.add("won");
        boxes[7].classList.add("won");
        winner();
      } else if (value3 != "" && value3 === value6 && value3 === value9) {
        boxes[2].classList.add("won");
        boxes[5].classList.add("won");
        boxes[8].classList.add("won");
        winner();
      } else if (value1 != "" && value1 === value5 && value1 === value9) {
        boxes[0].classList.add("won");
        boxes[4].classList.add("won");
        boxes[8].classList.add("won");
        winner();
      } else if (value3 != "" && value3 === value5 && value3 === value7) {
        boxes[2].classList.add("won");
        boxes[4].classList.add("won");
        boxes[6].classList.add("won");
        winner();
      }
    };
    checkWin();
  });

//play again
document.querySelector("button").addEventListener("click", function () {
  boxes.forEach((element) => {
    document.querySelector("h1").textContent = "Tic Tac Toe";
    element.textContent = "";
    element.classList.remove("active");
    element.classList.remove("disabled");
    element.classList.remove("won");
  });
});
//play again ends
