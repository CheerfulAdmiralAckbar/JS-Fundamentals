// let age = 15;

// while (age < 18) {
//   console.log("You're a child!");
//   age++;
// }

// console.log("You're an adult");


// loop through

// const favFilms = [
//   'Star Wars: The Empire Strikes Back',
//   'Rogue One',
//   'The Godfather',
//   'Goodfellas',
//   'Star Wars: A New Hope',
// ];

// favFilms.push('Gladiator', 'Scarface');

// for (let i = 0; i < favFilms.length; i++) {
//   console.log(`This is one of my favourite movies: ${favFilms[i]}`);
// }

// Store the numbers in an array in case needed
// let numArray = [];

// for (let i = 0; i < 6; i++) {
//   numArray.push(Math.floor(Math.random() * 51));
//   console.log(numArray[i]);
// }

// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// const films = [
//   'Star Wars: The Empire Strikes Back',
//   'Rogue One',
//   'Ghostbusters',
//   'Goodfellas',
// ];

// for (let i = 0; i < films.length; i++) {
//   if (films[i] === 'Ghostbusters') {
//     console.log('Yay its Ghostbusters');
//   } else {
//     console.log('Boo! We want Ghostbusers');
//   }
// }

// Activity 5:
// for (let i = 0; i < 6; i++) {
//   let num = Math.floor(Math.random() * 31);

//   if (num % 7 === 0) {
//     console.log(`${num} is divisible by 7.`);
//   } else {
//     console.log(`${num} is not divisible by 7.`);
//   }
// }

// Activity 6:
// const bobsFollower = [
//   'Ben',
//   'Susan',
//   'Keith',
//   'Frank',
// ];

// const hannahsFollowers = [
//   'Fred',
//   'Ben',
//   'Frank',
//   'Rachel',
// ];

// let matchFollowers = [];

// for (let i = 0; i < bobsFollower.length; i++) {
//   for (let j = 0; j < hannahsFollowers.length; j++) {
//     if (bobsFollower[i] === hannahsFollowers[j]) {
//       console.log(`${bobsFollower[i]} is also present in Hannah's friends list`);
//       matchFollowers.push(hannahsFollowers[j]);
//     }
//   }
// }

// console.log(`Mutual Followers: ${matchFollowers}`);

/**
 * For and While loops check the condition before the code inside excutes, if the condition is false 
 * the code inside will not execute, in a do while loop it does the opposite, where the condintion is checked
 * after meaning that even if the condition is already met, the code will run at least once
 */

// // Condition already met as i is not less than 5, so code inside will not run
// for (let i = 5; i < 5; i++) {
//   console.log(i);
// }

// // Condition already met as i is not less than 5, so code inside will not run
// let i = 5;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// // Condition met, but will run as the condition check is run after body, so it will increment and console.log 5
// let j = 5;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);

const favColour = (colour) => {
  console.log(`My Favourite Colour is: ${colour}`);
}

favColour('Red');
favColour('Blue');
favColour('Green');
favColour('Orange');