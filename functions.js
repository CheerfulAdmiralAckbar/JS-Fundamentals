// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));

let orderCount = 0;

const takeOrder = (topping, topping2) => {
  console.log(`Pizza with ${topping} and ${topping2} `);
  orderCount++;
  console.log(`Order count: ${orderCount}`);
}

takeOrder("pineapple", "ham");
takeOrder("chicken", "ham");
takeOrder("pepperoni", "meatball");


// let balance = 24000;
// const pinNumber = 1001;

// let withdrawalAmount = 0;
// let verifiedPin = false;
// let allowWithdrawl = false;

// const verifyCustomer = (pinEntered) => {
//   if (pinNumber === pinEntered) {
//     verifiedPin = true;
//   } else {
//     verifiedPin = false;
//     console.log('Pin Number invalid');
//   }
// }

// const setWithdrawlAmount = (amount) => {
//   withdrawalAmount = amount;
// }

// const verifyBalance = () => {
//   if (withdrawalAmount <= balance && verifiedPin === true) {
//     allowWithdrawl = true;
//   } else if (withdrawalAmount >= balance && verifiedPin === true) {
//     console.log('Insufficient funds.');
//   }
// }

// const withdrawMoney = () => {
//   if (verifiedPin === true && allowWithdrawl === true) {
//     balance = balance - withdrawalAmount;
//     console.log(`Withdrawing ${withdrawalAmount} from account. Balance remaining ${balance}`);
//   }
// }

// const cashMachineProcess = (pinNumber, withdrawlAmount) => {
//   verifyCustomer(pinNumber);
//   setWithdrawlAmount(withdrawlAmount);
//   verifyBalance();
//   withdrawMoney();
// }

// cashMachineProcess(1201, 2500);