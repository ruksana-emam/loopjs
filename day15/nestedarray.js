let array=[
    [1,2,3]
    [4,5,6]
    [7,8,9]
];

let flattenedArray=array.flat(1)

let value=flattenedArray.find((eachElement)=>eachElement%2==0)

console.log(value)