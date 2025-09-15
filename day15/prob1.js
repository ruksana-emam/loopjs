const employees = [
    [1000, "John Mathew", "Developer", "Kochi", 600000, 2],
    [1001, "Rahul Das", "QA Tester", "Kochi", 500000, 2],
    [1002, "Sneha Raj", "Automation Tester", "Tvm", 550000, 3],
    [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
    [1004, "Alan George", "Developer", "Kochi", 80000, 4],
    [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
    [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
    [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
    [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
    [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3]
];

// 1. print all employee name

employees.forEach((eachEmployee)=>console.log(eachEmployee[1]))

// 2. print total number of employee

console.log(employees.length)

// 3. print developer employee details

let developerArray=employees.filter((eachEmployee)=>eachEmployee[2]=="Developer");
console.log(developerArray);

// 4. print employee whose salary > 75000

let salaryArray=employees.filter((eachEmployee)=>eachEmployee[4]>750000)

// 5. print details of employee Vivek pp

let vivekDetails=employees.find((eachEmployee)=>eachEmployee[1]=="Vivek pp")
console.log(vivekDetails);

// 6. Sort employee based on their salary in descending order

let sortedArray=employees.sort((a,b)=>b[4]-a[4])
console.log(sortedArray)

// 7. Sort employee based on their experience in ascending  order

let expArray=employees.sort((a,b)=>a[5]-b[5])
console.log(expArray)

// 8. print total salary of all employees

let sum=0;
employees.forEach((eachEmployee)=>{
    sum=sum+eachEmployee[4]
})
console.log(sum)