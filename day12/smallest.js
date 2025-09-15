let numbers = [10, 20, 30];
let smallest =numbers[0];  

for (let i = 0; i <=length-1; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];  
  }
}

console.log("Smallest number is:", smallest);
