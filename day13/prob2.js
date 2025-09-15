let input=[4,5,6]
let output=[]
let sum=0;
for(value of input){
    sum+=value;
}
for(value of input){
    output.push(sum-value);
}
console.log(output);