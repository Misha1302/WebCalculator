window.onload = main;



let result;
let firstNumber;
let secondNumber;

function main() {
    let addBtn = document.getElementById("add");
    let subBtn = document.getElementById("sub");
    let mulBtn = document.getElementById("mul");
    let divBtn = document.getElementById("div");
    
    result = document.getElementById("Result");
    firstNumber = document.getElementById("first_number");
    secondNumber = document.getElementById("second_number");

    addBtn.onclick = () => set_result((a, b) => a + b);
    subBtn.onclick = () => set_result((a, b) => a - b);
    mulBtn.onclick = () => set_result((a, b) => a * b);
    divBtn.onclick = () => set_result((a, b) => a / b);
}

function set_result(func) {
    let a = func(Number(firstNumber.value), Number(secondNumber.value));
    result.textContent = "Result: " + a;
}