let score1 = document.getElementById("score card1");
let score2 = document.getElementById("score card2");

console.log(score1.textContent);
console.log(score2.textContent);
function addOne1(){
    score1.textContent = parseInt(score1.textContent) + 1;
}

function addOne2(){
    score2.textContent = parseInt(score2.textContent) + 1;
}

function addTwo1(){
    score1.textContent = parseInt(score1.textContent) + 2;
}

function addTwo2(){
    score2.textContent = parseInt(score2.textContent) + 2;
}

function addThree1(){
    score1.textContent = parseInt(score1.textContent) + 3;
}

function addThree2(){
    score2.textContent = parseInt(score2.textContent) + 3;
}

function reset(){
    score1.textContent = 0;
    score2.textContent = 0;
}
