// Function is a block used to perform the specific task.
function myFunction(){
    console.log("Hello World");
}

myFunction(); // Function return karana ka liya

// function are used to remove the reduancy(repeate)
// function -> 2 numbers,sum;
function add(a,b){ // parameter
    // local variables
    sum = a + b;
    return sum;
}
let val = add(1,2); // argumnent
console.log(val);

// nan = not a number

// function parameter -> like local variables -> block surface
// block surafce tak h jinda rahta ha

// Arrow function

const functionName = (a,b) =>{
    add = a + b;
    return add;
}

let result = functionName(1,4);
console.log(result);
// Q1 Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the String;
// sol:
const CountVowel = (abc) =>{
    let count = 0;
    for(let i=0;i<abc.length;i++){
        if(abc[i] == 'a' || abc[i] == 'e' || abc[i] == 'i' || abc[i] == 'o' || abc[i] == 'u'){
            count++;
        }
    }
    return count;
}
let str = CountVowel("Mridul");
console.log(str);
// for each loop
// callback is a function passed as an argument to another function.
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

let arr1 = ["pune","delhi","mumbai"];

arr1.forEach((val) => {
    console.log(val.toUpperCase());
});

// High order function

// that either take another function as paramerter or they return other function as a output are called higher order function
// Q2 For a given array of numbers . print the square of each value using the for each loop

let arr2 = [1,2,3,4,5];

arr2.forEach((num) => {
    console.log(num**2);
});

//Some More Array methods

// map method (new array return karka deta ha aur for each naya array return nahi karta bas opration apply karta ha!)

let nums = [20,40,80];

let new_array = nums.map((val) =>{
    return val * 2;
})

console.log(new_array);

// Filter method 
// Creates a new array of elements that give true for a conditionalfilter.
// Eg. all even numbers

let arr3 = [1,2,3,4,5,6,7,8,9,10];

let EvenArray = arr3.filter((val) =>{
    return val % 2 == 0;
})

console.log(EvenArray);

// Reduce method (it reduce the whole array and return thr single value);

let num = [1,2,3,4,5];

let res = num.reduce((acc,cur) =>{
    return acc + cur;
})

console.log(res);

// Q3 We are given array of marks of students. Filter out of the marks of students that secured that scored 90+.

let marks = [80,91,92,94,40,67,87]


let markhigh = marks.filter((val) =>{
    if(val > 90){
        return val;
    }
})

console.log(markhigh);

// Q4 Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of numbers in the array

let n = prompt("Enter the value of n:- ");

let new_arr = [];

for(let i=1;i<=n;i++){
    new_arr[i-1] = i;
}
console.log(new_arr);

let new_sum = new_arr.reduce((prev,curr)=>{
    return prev + curr;
    
});

let new_product = new_arr.reduce((prev,curr)=>{
    return prev * curr;
})

console.log(new_sum);
console.log(new_product);









