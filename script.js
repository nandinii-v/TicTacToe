let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetButton");
let newbtn = document.querySelector("#newButton");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".MainMsgContainer");

let playerOturn = true;

const winningRule = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const enableBox = () => {
    for (let b of box) {
        b.disabled = false;
        b.innerText = "";
    }
};
const disableBox = () => {
    for (let b of box) {
        box.disabled = true;
    }
};

const resetgame = () => {
    playerOturn = true;
    enableBox();
    msgcontainer.classList.add("hide");
};
const winnerMsg = (winner) => {
    msg.innerText = `Congratulations,${winner} Win`;
    msgcontainer.classList.remove("hide");
    disableBox();
};
const win = () => {
    for (let arr of winningRule) {
        let val1 = box[arr[0]].innerText;
        let val2 = box[arr[1]].innerText;
        let val3 = box[arr[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                winnerMsg(val1);
            }
        }
    }
};

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("u clicked the box");
        if (playerOturn) {
            box.innerText = "O";
            playerOturn = false;
        } else {
            box.innerText = "X";
            playerOturn = true;
        }
        box.disabled = true;

        win();
    });

});

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);


