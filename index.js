import chalk from "chalk";

function isPrime(num) {
  for (let index = 2, max = Math.sqrt(num); index <= max; index++) {
    if (num % index === 0) return false;
  }
  return num > 1;
}

function getPrimes(startInt, endInt) {
  if (isNaN(startInt) || isNaN(endInt)) {
    throw new Error("Неверный формат данных!");
  }
  let primes = [];
  for (let i = startInt; i < endInt; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let index = 0; index < primes.length; index++) {
    console.log(chalk.green(primes[index]));
  }
}

getPrimes(2, 20);
