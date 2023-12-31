/** 9. Prime numbers & timing execution
 *  check if a number is prime
 * count the number of prime numbers less than 100
 * prime numbers are only divisible by 1 and itself
 * prime numbers are greater than 1
 * prime numbers are whole numbers
 */
function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();
console.log(`Execution time of countPrimeNumbers was ${endTime - startTime} milliseconds.`);
