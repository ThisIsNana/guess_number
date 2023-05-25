//綁定DOM
const title = document.getElementById("title");
const rangeArea = document.getElementById("range-area");
const num1 = document.getElementById("num1");
const dash = document.getElementById("dash");
const num2 = document.getElementById("num2");
const input = document.getElementById("inputNum");
const btn = document.getElementById("btn");
const restartBtn = document.getElementById("restart-btn");

//建立隨機數字!
function getRandomInt() {
    // return +(Math.random() * 100 + 1).toFixed(0);
    return Math.floor(Math.random() * 100 + 1);
};

//初始設定
title.innerText = "猜數字";
let answer = getRandomInt();
num1.innerText = 1;
num2.innerText = 100;
console.log("答案：" + answer);


btn.addEventListener("click", function () {

    let inputNum = +input.value;
    console.log("輸入的值" + inputNum);

    if (+inputNum >= +num2.innerText || +inputNum <= +num1.innerText) {
        title.innerText = "不在範圍內!請重新輸入";

    } else if (inputNum < +answer) {
        title.innerText = "請繼續猜";
        num1.value = inputNum;
        num1.innerText = inputNum;

    } else if (inputNum > +answer) {
        title.innerText = "請繼續猜";
        num2.value = inputNum;
        num2.innerText = inputNum;

    } else {
        title.innerText = "答對了!";
        // 樣板字面符
        rangeArea.innerHTML = `<p class = 'fs-1'> ${answer} </p>`
        // num1.innerText = "";
        // num2.innerText = "";
        // dash.innerText = +answer;
        // dash.style.fontSize = "36px";
    }

    // 清空輸入欄
    input.value = "";
})

// 重新開始 ==> 頁面重整
restartBtn.addEventListener("click", function () {
    // title.innerText = "猜數字";
    // num1.innerText = "1";
    // num2.innerText = "100";
    // dash.innerText = "-";
    // let answer = getRandomInt();
    // console.log("答案：" + answer);
    location.reload();
})

