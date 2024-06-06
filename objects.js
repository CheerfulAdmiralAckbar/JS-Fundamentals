const person = {
  myName: "Ben",
  eyeColor: "Blue",
  sayHi() {
    console.log(`Hello my name is ${this.myName}`);
  }
}

person.sayHi();

const pet = {
  name: "Socks",
  typeOfPet: "cat",
  age: "6",
  colour: "Orange",
  eat() {
    console.log(`${this.name} is eating`);
  },
  drink() {
    console.log(`${this.name} is drinking`);
  }
}

pet.eat();
pet.drink();

const coffeeShop = {
  branch: "Liverpool",
  drinks: [
    { name: "Tea", price: 2.99, },
    { name: "Coffee", price: 4.99 },
  ],
  food: [
    { name: "Sandwich", price: 3.99 },
    { name: "Breakfast Deal", price: 6.99 }
  ],
  drinksOrdered(drink) {

  }
}

coffeeShop.drinksOrdered('tea', 'coffee');


// const person = {
//   myName: "Ben",
//   age: 26,
//   eyeColor: "Blue",
//   favouriteSongs: [],
//   addSong(song) {
//     this.favouriteSongs.push(song)
//   },
//   removeSong(song) {
//     this.favouriteSongs.pop();
//   }
// };

// person.addSong("Human - The Killers");
// person.addSong("Numb - Linkin Park");

// console.log(person.favouriteSongs);

// person.removeSong();

// console.log(person.favouriteSongs);

// person.favouriteSongs = [
//   "Human - The Killers",
//   "Numb - Linkin Park"
// ];

// for (let i = 0; i < person.favouriteSongs.length; i++) {
//   console.log(person.favouriteSongs[i]);
// }

// let day = "sat";
// let alarm = ""

// const myAlarm = {
//   weekendAlarm: "no alarm needed",
//   weekdayAlarm: "get up at 7am"
// };

// if (day === "sat" || day === "sun") {
//   alarm = myAlarm.weekendAlarm;
// } else {
//   alarm = myAlarm.weekdayAlarm;
// }

// console.log(alarm);