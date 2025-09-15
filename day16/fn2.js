let array = ["hello", "world", "first", "second", "third"];
let combined = array.reduceRight((acc, curr) => acc + " " + curr); //when give reduceRight the op will be from last to first

console.log(combined);
