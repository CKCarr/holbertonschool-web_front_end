// Log to the console Start of the execution queue
console.log('Start of the execution queue');
// Log to the console using setTimeout
setTimeout(() => {
    console.log('Final code block to be executed');
}, 0);
// log to console iteration# as it loops 100 times 
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// log to console end of loop printing
console.log('End of the loop printing');
