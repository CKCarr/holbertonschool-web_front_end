# JavaScript advanced

# JavaScript Concepts Explained

This README provides a clear and concise explanation of several fundamental JavaScript concepts. These concepts are crucial for understanding how JavaScript works and for writing efficient and maintainable code.

## Table of Contents

1. [Lexical Scoping in JavaScript](#lexical-scoping-in-javascript)
2. [Closure in JavaScript](#closure-in-javascript)
3. [Using Closure](#using-closure)
4. [Chaining Different Closures](#chaining-different-closures)
5. [Simulating Private Methods with Closure](#simulating-private-methods-with-closure)
6. [Execution Stack Order in JavaScript](#execution-stack-order-in-javascript)
7. [Using Binding in JavaScript](#using-binding-in-javascript)
8. [Using Callbacks in JavaScript](#using-callbacks-in-javascript)

---

### Lexical Scoping in JavaScript

Lexical scoping means that the scope of variables is determined by their physical location in the code's structure. If a variable is defined outside of any function, it is globally scoped, and if it's defined within a function, it's locally scoped.

### Lexical Scoping

``` JavaScript
var globalVar = "I am global";
function outerFunc() {
    var outerVar = "I am outside innerFunc";
    function innerFunc() {
        console.log(outerVar); // Accesses outerVar
        console.log(globalVar); // Accesses globalVar
    }
    innerFunc();
}
outerFunc();
```

### Closure in JavaScript

A closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.

### Closure example

``` JavaScript
function createGreeting(greetingPrefix) {
    return function(name) {
        return greetingPrefix + ' ' + name;
    }
}
var sayHello = createGreeting("Hello");
console.log(sayHello("Alice")); // Outputs: "Hello Alice"

```

#### Using closure

Closures can be used to create private variables and methods, allowing for encapsulation and data hiding in JavaScript.

``` JavaScript
function counter() {
    var count = 0;
    return function() {
        count += 1;
        return count;
    }
}
var myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

#### Chaining different closures

Closures can be chained by returning a function from another function.

``` JavaScript
function multiply(x) {
    return function(y) {
        return x * y;
    }
}
var multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // Outputs: 6

```

#### Simulating Private Methods with Closure

Closures enable the simulation of private methods which are not accessible outside their containing function.

``` JavaScript
function createCounter() {
    var count = 0;
    return {
        increment: function() { count++; },
        decrement: function() { count--; },
        getCount: function() { return count; }
    }
}
var counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
counter.decrement();
console.log(counter.getCount()); // 0
```

#### Execution Stack Order in JavaScript

JavaScript uses a call stack for function execution, following the Last In, First Out (LIFO) principle.

Example
Consider the nested function calls and their return order

#### Using Binding in JavaScript

The bind() method creates a new function with it's this keyword set to the provided value.

``` JavaScript
var module = {
    x: 42,
    getX: function() { return this.x; }
};
var unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
var boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
/ 0
```

#### Using Callbacks in JavaScript

Callbacks are functions passed into other functions as arguments to be executed later.

``` JavaScript
function greeting(name) {
    alert('Hello ' + name);
}
function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting);

```
