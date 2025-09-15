const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80

let scoreArray= students.filter((eachStudent)=>eachStudent[3]>80)
console.log(scoreArray)

// Print all students in BCA course

let bcaArray=students.filter((eachStudent)=>eachStudent[2]=="bca")
console.log(bcaArray)

// Print all students from Kochi

let kochiArray=students.filter((eachStudent)=>eachStudent[4]=="Kochi")
console.log(kochiArray)

// Create a new array with only names and marks

let newArray=students.map((eachStudent)=>[eachStudent[1],eachStudent[3]])
console.log(newArray)
// Print total marks of all students

total=0;
students.forEach(eachStudent)=>{
    total+=
}

// Print average mark of students
//  Sort students by marks in descending order
// Find the highest scoring student
//  Print students who scored less than 70