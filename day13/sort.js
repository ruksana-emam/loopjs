let numArray=[10,7,22,3,1,4,5,0]
let sortedArray1=numArray.sort((a,b)=>b-a);  //descending second args to first
console.log(sortedArray1);
let sortedArray2=numArray.sort((a,b)=>a-b); //ascending first args to second
console.log(sortedArray2);