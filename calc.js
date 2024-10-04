let display = document.getElementById("display");
function buttonOne() {
    display.value += "1"
}
function buttonTwo() {
    display.value += "2"
}
function buttonThree() {
    display.value += "3"
}
function buttonMinus() {
    display.value += "-"
}
function buttonSolve() {
    let y = display.value;
    let x = eval(y);
    display.value = x;
}
function buttonFour() {
    display.value += "4"
}
function buttonFive() {
    display.value += "5"
}
function buttonSix() {
    display.value += "6"
}
function buttonDivide() {
    display.value += "/"
}
function buttonSeven() {
    display.value += "7"
}
function buttonEight() {
    display.value += "8"
}
function buttonNine() {
    display.value += "9"
}
function buttonPlus() {
    display.value += "+"
}
function buttonDot() {
    display.value += "."
}
function buttonZero() {
    display.value += "0"
}
function buttonMult() {
    display.value += "*"
}
function button() {
    let x = display.value;
    display.value += x;
}
function buttonClear() {
    display.value = ""
}