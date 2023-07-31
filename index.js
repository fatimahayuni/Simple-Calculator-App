let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let totalAdd = num1 + num2
    sumEl.textContent = totalAdd
}

function substract() {
    let totalSubstract = num1 - num2
    sumEl.textContent = totalSubstract
}

function divide() {
    let totalDivide = num1 / num2
    sumEl.textContent = totalDivide
}

function multiply() {
    let totalMultiply = num1 * num2
    sumEl.textContent = totalMultiply
}


// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
