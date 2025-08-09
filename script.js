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

let num1 ;
let num2 ;
let operator ;

let numbers = Array.from(document.querySelectorAll(".digit"));
for (num of numbers) {
    num.addEventListener("click",(e) => {
        num1 = e.target.textContent;
        console.log(num1);});
}

