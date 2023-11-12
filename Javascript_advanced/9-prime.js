/** 9. Prime numbers & timing execution
 *  check if a number is prime
 * count the number of prime numbers less than 100
 * prime numbers are only divisible by 1 and itself
 * prime numbers are greater than 1
 * prime numbers are whole numbers
 */
function isPrime(num) {
    for (let idx = 2; idx <= Math.sqrt(num); idx++){
        if (num % idx === 0) {
            return false;
        }
    }
    return num > 1;
}

function countPrimeNumbers() {
    let count = 0;
    for (let num = 2; num <= 100; num++) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
