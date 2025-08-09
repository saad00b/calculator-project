function add(a,b) {return a+b;}
function subtract(a,b) {return a-b;}
function multiply(a,b) {return a*b;}
function divide(a,b) {return a/b;}

function operate(a,b,op) {
    if (op === "+") {add(a,b);}
    if (op === "-") {subtract(a,b);}
    if (op === "*") {multiply(a,b);}
    if (op === "/") {divide(a,b);}
}

let activeNumber ="";
let num1 ;
let num2 ;
let operator ;

let numbers = Array.from(document.querySelectorAll(".digit"));
for (num of numbers) {
    num.addEventListener("click",(e) => {
        activeNumber += e.target.textContent;
        console.log(activeNumber);});
}

let operators = Array.from(document.querySelectorAll(".operator"));
for (op of operators) {
    op.addEventListener("click", (e) => {
        operator = e.target.textContent
        console.log(operator);
        num1 = parseInt(activeNumber);
        console.log(`number 1 is ${num1}`);
        activeNumber = "";
    });
}

