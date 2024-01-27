/*const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const letterGrades = ["A", "B", "A"];

function grade(letterGrades){
    let points = 0
    if (letterGrades === "A") {
        points = 4;
    } else if (letterGrades == "B") {
        points = 3;
    } 
    return points
}

const gpaPoints = letterGrades.map(grade);
console.log(gpaPoints)


const letterGrades = ["A", "B", "A"];

function grade(letterGrades){
    let points = 0
    if (letterGrades === "A") {
        points = 4;
    } else if (letterGrades == "B") {
        points = 3;
    } 
    return points
}

const gpaPoints = letterGrades.map(grade);
console.log(gpaPoints)


const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log( gpa)


const food = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = food.filter(function filtered (food) {
    return food.length>6 
})
console.log(shortWords)

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

console.log(numbers.indexOf(luckyNumber))

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
console.log(event);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);*/
const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e.code);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}