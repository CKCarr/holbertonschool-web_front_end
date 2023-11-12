/** Stack order in functions
 * Write a function processPayment 
 * accepts a number amount
 * 
 * Write a function processOrder
 * accepts a number process ID and a number amount
 * 
 * logs the process ID and amount to the console
 */

function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount)
    console.log(`${orderId} has been fully processed`);
}

console.log('Processing orders');
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log('All the orders have been processed');
