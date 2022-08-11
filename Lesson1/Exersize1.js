import chalk from "chalk";

const startInt = process.argv[2];
const endInt = process.argv[3];

if (isNaN(startInt) || isNaN(endInt)) {
  throw new Error(chalk.red("Неверный формат данных!"));
}

function isPrime(num) {
  for (let index = 2, max = Math.sqrt(num); index <= max; index++) {
    if (num % index === 0) return false;
  }
  return num > 1;
}

const colors = { green: 0, yellow: 1, red: 2 };
let currentColor = colors.green;

function changeColor() {
  currentColor++;
  if (currentColor > colors.red) {
    currentColor = colors.green;
  }
}

function printPrimes(num) {
  switch (currentColor) {
    case colors.red:
      console.log(chalk.red(num));
      break;
    case colors.green:
      console.log(chalk.green(num));
      break;
    case colors.yellow:
      console.log(chalk.yellow(num));
      break;
  }
  changeColor();
}

for (let index = startInt; index < endInt; index++) {
  if (isPrime(index)) printPrimes(index);
}
