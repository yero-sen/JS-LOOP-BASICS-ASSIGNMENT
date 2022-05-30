// JS Loop Basics Asgn

// HTML Elements
let happyEl = document.getElementById('happyBtn');
let calc4El = document.getElementById('calc4');
let oddNumEl = document.getElementById('oddNum');
let sum1El = document.getElementById('sum1');
let sum2El = document.getElementById('sum2');


// Event Listeners
happyEl.addEventListener('click', happy);
calc4El.addEventListener('click', calc4);
oddNumEl.addEventListener('click', oddNum);
sum1El.addEventListener('click', sum1);
sum2El.addEventListener('click', sum2);

// Event Functions
// Repeat string 500 times
function happy() {
    for (let nWrite = 1; nWrite <= 500; nWrite++) {
        console.log("I'm so happy!");
    }
}

// Multiples of 4 from 12 to 800
function calc4() {
    for (let constant = 12; constant <= 800; constant += 4) {
        console.log(constant);
    }
}

// Odd numbers from 55 to 11
function oddNum() {
    for (let oddN = 55; oddN >= 11; oddN -= 2) {
        console.log(oddN);
    }
}

// Sum of the series 5 + 6 + 7 + 8 + … + 48 + 49 + 50
function sum1() {
    let total = 0;
    for (let t1 = 5; t1 <= 50; t1++) {
        total = total + t1;
    }
    console.log(total);
}

// sum of the series 10 + 20 + 30 + … + 90 + 100
function sum2() {
    let totalSum = 0;
    for (let t1 = 10; t1 <= 100; t1 += 10) {
        totalSum = totalSum + t1;
    }
    console.log(totalSum);
}