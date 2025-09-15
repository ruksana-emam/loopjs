// [ no, name, English, Math, Science, Attendance, ExtraCurricular ]

student_data = [
  [1, "Anu", 78, 85, 88, 180, 40],
  [2, "Binu", 65, 70, 75, 170, 30],
  [3, "Charu", 90, 95, 92, 190, 50],
  [4, "Deepu", 55, 60, 58, 160, 20],
  [5, "Esha", 82, 80, 85, 175, 35],
  [6, "Faisal", 72, 68, 70, 165, 25],
  [7, "Gopu", 88, 92, 90, 185, 45],
  [8, "Hari", 60, 55, 65, 155, 15],
];

// 1️⃣ Find student with highest total marks (English + Math + Science)

let max=student_data.reduce((acc,curr)=>acc[2]+curr[3]+acc[4]>curr[2]+curr[3]+curr[4]?acc:curr)
console.log(max)

console.log(".......................")


// 2️⃣ Find student with lowest attendance 

let lowest=student_data.reduce((acc,curr)=>acc[5]<curr[5]?acc:curr)
console.log(lowest)

clg(".....................................")

// 3️⃣ List students who scored more than 80 in English 
let listStudents=student_data.filter((eachElement=>eachElement[2]>80))
listStudents.forEach((eachStudent)=>console.log(eachStudent[1]))
console.log(students)

console.log("...................................")

// 4️⃣ Sort students by Math marks in ascending order 
let sortedStudents=student_Data.sort((a,b)=>a[3]-b[3])
console.log(sortedStudents)

console.log("..............................................")


// 5️⃣ Check if any student has extra-curricular score > 45 

let check=student_data.some=((eachStudent)=>eachStudent[6]>45)
console.log(check?"yes":"no")


// 6️⃣ List all students who scored below 60 in any subject 
let scoreList=student_data.filter((eachStudent=>eachStudent[2]<60 || eachStudent[3]<60 || eachStudent[4]<60
))
console.log(scoreList)

console.log(".....................................")


// 7️⃣ Sort students by total attendance descending :- 
let attendence=student_data.sort((a,b)=>b[5]-a[5]);
console.log(attendence)

console.log("......................................")

// 8️⃣ Print details of student named 'Charu' :-

let charuDetails=student_data.find((eachStudent=>eachStudent[1]=="Charu"))
console.log(charuDetails)

console.log("..............................")

// 9️⃣ Calculate total marks scored by all students in Science :-

let scienceTotal=student_data.reduce((acc,curr=>acc+curr[4],0))
console.log(scienceTotal)

console.log("........................")

// 🔟 Count students who have attendance more than 170 :-

let attendence1=student_data.filter((eachStudent=>eachStudent[5]>170))
console.log(attendence1.length)