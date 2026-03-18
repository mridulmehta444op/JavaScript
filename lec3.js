// Loops
// let a = 1
// let i;
// for(i=1;i<=5;i++){
//     console.log(i);
// }
// a = 1
// c = 2

// Sum of n numbers
// let sum = 0;
// let n = 5;
// for(let i=1; ;i++){
//     console.log(i); // Infinity loop ( do not run this)
// }
// While loop
// let n = 1;
// let i = 1

// while(i<=5){
//     console.log(i);
//     i++;
// }
// Do-While loop
// Table of 5 using do-while loop
// let n = 5;
// let i = 1;

// do{
//     console.log(n , " X ", i , " = " , n*i);
//     i++;
// }
// while(i<=10);
// For off loop = used for the arrays and strings
// let str = "Mridul Mehta";
// let size = 0;
// for(let i of str){
//     // console.log("i = " ,i);
//     size++;
// }
// console.log(size);
// for in loop

// let student = {
//     name : "Mridul Mehta",
//     age : 20,
//     cgpa : 7.61,
//     isPass : true
// }
// for(let key in student){
//     console.log("key:- ", key, "value:- ", student[key]);
// }
// Practise questions
// Q1 Print all even numbers from 0 to 100

// let n = 100;
// let i;

// for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Q2 Create a game where you start with any random game number.  Ask the user to keep guessing the game number until the user enters correct value.

// let num = 10;  // fixed number
// let n;

// do {
//     n = prompt("Enter the value:");
// } while (n != num);

// console.log("Correct guess!");
// Strings
// let str = "Mridul Mehta";
// let str2 = 'Sanvi';
// console.log(str2[0]);
// Template Litrals

// let special_String = `This is a template literal`;

// console.log(typeof(special_String));

// let obj = {
//     name : "pen",
//     price : 10
// }
// output = `The item name is :- ${obj.name} , The price of item is :- ${obj.price} ruppes`;
// console.log(output);
// console.log("The item name is :- " , obj.name , " Value of pen is:- " , obj.price , " ruppes");

// String Methods 

// let str = "mridul";
// str = str.toUpperCase(); // strings in javascript are immutable
// console.log(str);

// let str1 = "Mridul Mehta";

// str1 = str1.trim(); // trim the spaces from last and beginneng not from middle

// console.log(str1);

// let str = "Mridul";

// str = str.slice(0,4); // Slicing

// console.log(str);

// let str1 = "Mridul";
// let str2 = "Radhika";

// let result = str1.concat(str2); // Two strings ko add karna ka liya use karta ha like we can also '+' simple in betweeen also we get the same output

// console.log(result);

// let str = "hello";

// console.log(str.replace("h","y")); // replace the str chars

// let str = "Mridul"; // Main point strings are immutable iska matlab ki hum string ki value ko change nahi kar sakta

// console.log(str.charAt(2));


//  Q1 Prompt the user to enter thier full name. Generate a username for them based on the input. Start username with @, followed thier full name and ending with the full name length.

let str = prompt("Enter your username:- ");
let len = str.length;

let char = "@";

let result = char.concat(str);

console.log(result + len);

