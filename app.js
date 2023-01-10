console.log("Hello World!\n==========\n");

// Exercise 1 Section
//In this exercise, you will be counting from 1 - 100. For each odd number, 
//you will print the number to the console. If the number is even, do nothing.

//Create a for loop that evaluates numbers from 1 to 100.
//Inside the loop body, write an if/else selection statement that checks whether 
//a number is odd. If the number is odd, then print the number to the console, 
//otherwise do nothing and continue to the next number
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i < 101; i++) {
    if (i % 2 == 1) {
    console.log(i);
    }
    //else {
        //;
    //}
}
// Exercise 2 Section
//FIZZBUZZ is a very common coding interview problem. 
//Below are the instructions to solving the problem:

//Create a for loop that evaluates numbers from 1 to 100 like the problem above.
//Write a if/else selection statement inside the body of the the loop that checks 
//the following:
//If the number is divisible by 3, then console.log 'FIZZ'
//If the number is divisible by 5, then console.log 'BUZZ'
//If the number is divisible by both 3 and 5, then console.log 'FIZZBUZZ'
//Ex: 15 would print 'FIZZBUZZ', 33 would print 'FIZZ', and 35 would print 'BUZZ'
console.log("EXERCISE 2:\n==========\n");
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log((i));
}
console.log("EXERCISE 3:\n==========\n");

//for (var i = 1; i < 101; i++)
//{
let a = 1;
while (a < 101) {
    if(a%2 == 1)
    {console.log(a);}
    a++;
};
// Exercise 4: part 2
let x = 1;       

do  {
    x = x + 1;
    if (x % 15 == 0) console.log("FizzBuzz");
    else if (x % 3 == 0) console.log("Fizz");
    else if (x % 5 == 0) console.log("Buzz");
    else console.log(x);

} while (x < 101 );

console.log("EXERCISE 4:\n==========\n");
//Create a for loop that iterates from 0 to n
//If your current iteration is equal to value, then print "Found value!", and break out of the loop
//If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (b = 1; b <= n; b++ ) {
    if (i == value) {
    console.log(`Found the value ${value}!`);
    break;
    }
    if (b == n) {
        console.log(`Value ${value} not found.`)
    }
}
console.log("EXERCISE 5:\n==========\n");

//Re-implement exercise 2, but use start as the initial value for i, *done
//end as the range limit in i <= end, and fizzDivisor and buzzDivisor as 
//the dependent values for determining "FIZZ" and "BUZZ" print messages.
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000
for (var z = start; z <= end; z++) {
    if (z % fizzDivisor == 0) console.log('Fizz');
    else if (z % buzzDivisor == 0) console.log("Buzz");
    else console.log(z);
}