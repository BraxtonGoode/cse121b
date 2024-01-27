

/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 +number2;
}
function addNumbers(add1, add2) {
    let addnumber1 = Number(document.querySelector("#add1").value);
    let addnumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = add(addnumber1,addnumber2);
}
document.querySelector("#addNumbers").addEventListener("click" ,addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1-number2;
}

function subtractNumbers(subtract1,subtract2) {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1,subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply =  (factor1,factor2) => factor1*factor2;

const multiplyNumbers = (factor1,factor2) => {
    let multiply1 = Number(document.querySelector("#factor1").value);
    let multiply2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiply1,multiply2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 /number2;
}

function divideNumbers(dividend1,divisor1) {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    let quotient = divide(dividend,divisor);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click",divideNumbers)
//------------------------------------------------------------------------------

/* Decision Structure */

function total(subtotal1) {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    const discount = subtotal * .20
    if (document.getElementById("member").checked) {
        subtotal = subtotal - discount
    } else {
        subtotal = subtotal
    }

    document.getElementById("total").textContent = subtotal.toFixed(2);    
}


document.getElementById("getTotal").addEventListener("click",total)

/* ARRAY METHODS - Functional Programming */
const myarray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").textContent = myarray;
/* Output Odds Only Array */
document.getElementById("odds").textContent = myarray.filter(number => number % 2 != 0)

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = myarray.filter(number => number % 2 === 0)
/* Output Sum of Org. Array */

document.getElementById("sumOfArray").innerHTML = myarray.reduce((total,number) => total + number)
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = myarray.map((total) => total * 2)

/* Output Sum of Multiplied by 2 Array */
const newArray = myarray.map((total) => total * 2)

document.getElementById("sumOfMultiplied").innerHTML = newArray.reduce((total,number) => total + number)
