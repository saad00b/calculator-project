function add(a,b) {return parseFloat((a+b).toFixed(2));}
function subtract(a,b) {return parseFloat((a-b).toFixed(2));}
function multiply(a,b) {return parseFloat((a*b).toFixed(2));}
function divide(a,b) {return parseFloat((a/b).toFixed(2));}

function operate(a,b,op) {
    if (op === "+") {return add(a,b);}
    if (op === "-") {return subtract(a,b);}
    if (op === "*") {return multiply(a,b);}
    if (op === "/") {return divide(a,b);}
}



let activeNumber ="";
let nums = [] ;
let result ;
let operator ;
let display = document.querySelector(".display");
display.textContent = "";


let numbers = Array.from(document.querySelectorAll(".digit"));
for (num of numbers) {
    num.addEventListener("click",(e) => {
        if (operator !== "" || nums.length !== 1) //prevent changing result of previous op
        {
            activeNumber += e.target.textContent;
            display.textContent += e.target.textContent;
        }
        else {
            clear();
            activeNumber += e.target.textContent;
            display.textContent += e.target.textContent;
        }
    });
}

let operators = Array.from(document.querySelectorAll(".operator"));
for (op of operators) {
    op.addEventListener("click", (e) => {
        if (activeNumber !== "") {
            if (nums.length === 1) { //for chaining ops
                getResult();
                activeNumber = "";
                operator = e.target.textContent ;
                display.textContent += e.target.textContent;
                return ;
            }
            operator = e.target.textContent ;

            if (nums.length === 0) 
            {nums.push(parseInt(activeNumber));}
            activeNumber = "";
            display.textContent += operator; 
        }
    });
}

let resultButton = document.querySelector("#result");
resultButton.addEventListener("click",() => {
    getResult();
})

function getResult() {
    if (activeNumber !== "" && nums.length === 1 && operator !== "") {
        nums.push(parseInt(activeNumber));
        activeNumber = "";
        if (nums.length === 2) {
            result = operate(nums[0],nums[1],operator);
            display.textContent = `${result}` ;
            nums = [result];
            activeNumber = result ;
            operator = "";
        }
    }
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clear();
})

function clear() {
    activeNumber ="";
    nums = [] ;
    result = null;
    operator = "";
    display.textContent = "";
}

