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

let startTime;
let count = 0;

function repeatedlyCountPrimes() {
    if (count < 100) {
        countPrimeNumbers();
        count++;
        setTimeout(repeatedlyCountPrimes, 0);
    } else {
        let endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    }
}

startTime = performance.now();
setTimeout(repeatedlyCountPrimes, 0);
