const display = document.querySelector("#display")
const num = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector("#equals")
const ac = document.querySelector("#on")
const clear = document.querySelector("#clear")
const percentage = document.querySelector("#percentage")
const decimal = document.querySelector("#decimal")
const plusminus = document.querySelector("#plusMinus")

let num1 = 0
let num2 = 0
let oper = " "
let result = 0




num.forEach((item) => {
    item.addEventListener('click', () => {
        display.innerHTML += item.innerHTML
    })
})

operator.forEach((operate) => {
    operate.addEventListener("click", () => {
        oper = operate.innerHTML
        num1 = Number(display.innerHTML)
        display.innerHTML = ""
        console.log("operator is", oper);
        console.log("num1 is", num1);
    })
})

equal.addEventListener('click', () => {

    num2 = Number(display.innerHTML)
    console.log("num2 is", num2);
    if (oper === "+") {
        result = num1 + num2
        display.innerHTML = result
        num1 = result
        num2 = 0
        console.log("result is", result);

    } else if (oper === "-") {
        result = num1 - num2
        display.innerHTML = result
        num1 = result
        num2 = 0

    } else if (oper === "x") {
        result = num1 * num2
        display.innerHTML = result
        num1 = result
        num2 = 0

    } else if (oper === "/") {
        result = num1 / num2
        display.innerHTML = result
        console.log("result is ", result);
    }
})

ac.addEventListener('click', () => {
    display.innerHTML = ""
    num1 = 0
    num2 = 0
})

clear.addEventListener('click', () => {
  
    if (display.innerHTML === 'undefined'||
        display.innerHTML === 'Infinity' ||
        display.innerHTML === '-Infinity' ||
        display.innerHTML === 'error' ||
        display.innerHTML === 'NaN' ||
        display.innerHTML === ' '
    ){
        display.innerHTML = ""
    }
      display.innerHTML = display.innerHTML.slice(0, -1);
})

percentage.addEventListener('click', () => {
    display.innerHTML = display.innerHTML / 100
})

decimal.addEventListener('click', () => {
    if (!display.innerHTML.includes(".")) {
        display.innerHTML += "."
    }
})

plusminus.addEventListener('click',()=>{
    display.innerHTML *= -1
})













