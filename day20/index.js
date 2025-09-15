let employeeDetail={
    name:"Athul",
    age:24,
    designation:"React Developer",
    Location:"Kochi",
    isPresent:null,
    languagesKnown:['malyalam','tamil']
};

//print all key values in the given object
console.log(Object.keys(employeeDetail))

//add a new key value pair(salary=age*1000)
employeeDetail.salary=employeeDetail.age*1000
console.log(employeeDetail)


//set isPresent as true
employeeDetail.isPresent=true;
console.log(employeeDetail)


//add new language english
employeeDetail.languagesKnown.push('english')
console.log(employeeDetail)