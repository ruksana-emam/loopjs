let obj1={
    name:"baleno",
    price:123409,
    parentCompany:"maruthiSuzuki",
    NoOfTyres:5,
};
let obj2={
    name:"glanza",
    price:123409,
    parentCompany:"toyota",
};
obj2.__proto__=obj1
console.log(obj2.name)

