let array=[2,3,6,8,44,67,10]
//total
let total=array.reduce((acc,curr)=>acc+curr)
console.log(total)
//if we give initial value
let totall=array.reduce((acc,curr)=>acc+curr,2) //initial value is given as 10
console.log(total)
//largest
let largest=array.reduce((acc,curr)=>acc>curr?acc:curr)
console.log(largest)
//smallest
let smallest=array.reduce((acc,curr)=>acc<curr?acc:curr,0) //0 is given as an initial value
console.log(smallest)