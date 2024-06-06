// let myName = "Admiral Ackbar";
// let myAge = 84;
// let myFavouriteColour = "Red";

// console.log(`My name is ${myName}, I am ${myAge} years old and my favourite colour is ${myFavouriteColour}`);

// myName = "Ben Johnston";
// myAge = 26;
// myFavouriteColour = "Red";

// console.log(`I'm ${myName} and my favourite colour is ${myFavouriteColour} and I am ${myAge} meaning I turn 27 in August.`);

// let breakfast = "nothing";
// let lunch = "Ham Sandwich";
// let dinner = "Pizza";

// console.log(`Today for breakfast I had ${breakfast}, then at lunch I had ${lunch} and for dinner I will eat ${dinner}`);

// breakfast = "Cereal";
// lunch = "Egg and Bacon on Toast";
// dinner = "Fish and Chips"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for my midday lunch and ${dinner} for my dinner.`);

// Date and time it currently is
const currentDate = new Date();
const birthdayDate = new Date('08/30/2024');

// amount of miliseconds in a second timesed by the amount of minutes in hour, timesed by hours in a day
const day = 1000 * 60 * 60 * 24;

// stores days remaining, subrtacts birthdayDate from currentDate, divides by each day and rounds the number out so it's a whole number
const daysRemaining = Math.round(Math.abs((currentDate - birthdayDate) / day));

console.log(`There are ${daysRemaining} days remaining until my birthday! 🎉🎉🎉 🦜`);