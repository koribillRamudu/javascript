function addTwoNumbers() {
    let a = parseInt(prompt("Enter the a value:"));
    let b = parseInt(prompt("Enter the b value:"));
    let sum = a + b;
    let product = a * b;
    console.log(`The sum of the two numbers is ${sum}`);
    console.log(`The product of the two numbers is ${product}`);
}

function checkEvenOrOdd() {
    let num = parseInt(prompt("Enter a number:"));
    if (num % 2 === 0) {
        console.log(`The given number ${num} is even`);
    } else {
        console.log(`The given number ${num} is odd`);
    }
}
