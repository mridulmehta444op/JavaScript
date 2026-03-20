let arr1 = ["mridul","mehta","sharma"];

console.log(arr1);
console.log(arr1.length); // property

let heros = ["Spider-man","thor","hulk","captain america"];

console.log(typeof(heros)); // object

let marks = [11,22,33,44];
marks[2] =66;
console.log(marks[0]); // 11 output
console.log(marks[2]); // 66 output

// note :- strings are immutable and arrays are mutable

let friends = ["mridul","omkar","ashish","sidhu","harman"];

for(let i=0;i<friends.length;i++){
    console.log(friends[i]);
}

// for of

for(let friend of friends){
    console.log(friend.toUpperCase());
}

// Q1 For a given array with marks of students -> [85,97,44,37,76,60];
// Find the average marks of the entire class
let scores = [85,97,44,37,76,60];

let sum = 0;

for(let i=0;i<scores.length;i++){
    sum += scores[i];
}

let average = sum / scores.length;

console.log(`The avg is equale to:- ${average}`);

// Q2 For a given array with prices of 5 items -> [250,645,300,900,50];
// All items an offer at 10% OFF on them . Change the array to store final price after applying offer.

let price = [250,645,300,900,50];

for(let i=0;i<price.length;i++){
    price[i] = price[i] - price[i] * 10/100;
}

console.log(price);

// Arrays methods 

let veggies = ["potato","tomato","spinich","bagan","Coiflower"]
veggies.push("ghia"); // add karta ha
veggies.pop(); // last item delete ho jayga
let delItem = veggies.pop();
console.log(veggies);
console.log(delItem);

let foodItems = [3,2,1];

let string = foodItems.toString();

console.log(string);

let g1 = ["ashish","udit","abhishek"];
let g2 = ["mridul","rajeev","omkar"];

let k24NR = g1.concat(g2); // add kar data ha 2 array ko

console.log(k24NR);

g1.shift(); // first element del ya hata deta ha agar samna let use karo ga to return bhi ka sakta ho

console.log(g1);

// Slicing (original array change nahi hoti)

let anime = ["giyu san","obnani","sanami","tengen","rengoko"];

console.log(anime.slice(1,3));

// Splice method (original array change ho jati ha)

let jjk = ["gojo","geto","nanami","megumi","yuji"];

jjk.splice(2,2,"jogo","toji"); // second position pa humko 2 jaga delete karna ha aur wahi do jaga pa new elements ko add karna ha
// note :- jis particulre index pa jaka agar add karna ho to vhi kar sakta ha
console.log(jjk);

// Q3 Create an array to store companies -> "Bloomberg" ,"Microsoft","Uber","Google","IBM","Netflix";
// a. Remove the first company from the Array;

let comp = ["Bloomberg" , "Microsft" , "Uber" , "Google" , "IBM" , "Netflix"];

comp.shift();

// b. Remove Uber & Add Ola in its place;
comp.splice(1,1,"Ola");


// c. Add Amazone at the end;
comp.push("Amazone");

console.log(comp);



