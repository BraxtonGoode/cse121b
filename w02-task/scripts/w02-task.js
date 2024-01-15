/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Braxton Goode"
const currentYear = 2024
const profilePicture = "images/IMG_2676.PNG"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.images[0];




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);


/* Step 5 - Array */
let favFood = ['pizza ', 'Orange Chicken ', "Chili "];

foodElement.innerText = favFood;

const newFood = 'steak';

favFood.push(newFood);

foodElement.innerHTML += `<br>${favFood}`;

favFood.shift()

foodElement.innerHTML += `<br>${favFood}`;

favFood.pop()

foodElement.innerHTML += `<br>${favFood}`;
