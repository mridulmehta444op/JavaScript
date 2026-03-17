// console.log("Hello World!"); //This code prints Hello World
// let a = 10
// let b = 5

// console.log("a + b :- ",a+b); // addition
// console.log("a - b :- ",a-b); // Substraction
// console.log("a * b :- ",a*b); // Multiplication
// console.log("a / b :- ",a/b); // Divide
// console.log("a % b :- ",a%b); // Modulo remainder
// console.log("a power b :- ",a**b); // Power exponent

// Unary operator

// 

// Assignment operator

// let a = 5;
// let b = 2;

// a += 4;

// console.log(a);
// Comparision operator

// let a = 4;
// let b = 4;

// console.log(a==b); // Return true

// let c = 1;
// let d = 0;

// console.log(c==d); // return false 

// let f = 1;
// let g = "1";
// console.log(f==g); // true
// console.log(f===g); // false 

// Logical operator
// logical and (&&)
// let a = 18

// if(a > 17 && a == 18){ // need to check both the condition is true
//     console.log("You can vote");
// }
// else {
//     console.log("No you cannot vote");
// }
// // logical or


// if(a > 17 || a == 18){ // need to check only single condition should be true
//     console.log("You can vote");
// }
// else {
//     console.log("No you cannot vote");
// }

// // Logical not (make true to false or vise versa)

// Conditional statement upar bhi discuss kiya hua ha 
// simle if else 
// Special operator

// let a = 18

// console.log(a >= 18 ? "adult" : "not adult");

// Q1 Get user to input a number using prompt("Enter the number: "). Check if the number is a multiple of 5 or not ?
// let num = prompt("Enter the number!:- ");

// if(num % 5 == 0){
//     console.log("Num is the multiple of 5");
// }
// else{
//     console.log("It is not the multiple of 5");
// }
// Q2 Write a code which can give grades to students according to thire scores.
let num = prompt("Enter your score:- ");

if(num <= 100 && num >= 80){
    console.log("You got grade A");
}
else if(num >= 70 && num <= 79){
    console.log("You got grade B");
}
else if(num >= 60 && num <= 69){
    console.log("You got grade C");
}
else if(num >= 50 && num <= 59){
    console.log("You got grade D");
}
else if(num >= 0 && num <= 49){
    console.log("You got grade F");
}
else{
    console.log("Please enter the vaid num");
}