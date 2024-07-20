// Method 1: Using Array constructor with length
const largeArray = new Array(1000).fill(0); // Creates an array with 1000 elements, all initialized to 0

// Method 2: Using a loop to push elements
const anotherLargeArray = [];
for (let i = 1; i <= 1000; i++) {
  anotherLargeArray.push(i); // Creates an array with numbers from 1 to 1000
}

// Method 3: Using spread operator and Array.from() for random numbers
const randomArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)); // Array with 1000 random numbers between 0 and 999

console.log(randomArray)