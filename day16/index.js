// [ no,district,+ve cases, death rate, curred rate ,1st dose vaccine , 2nd dose vaccine ]

covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Thiruvananthapuram", 25000, 1500, 18000, 15000, 1800],
  [3, "Kozhikode", 27000, 1800, 20000, 19000, 1700],
  [4, "Thrissur", 30000, 1900, 22000, 21000, 2000],
  [5, "Kottayam", 20000, 1200, 15000, 14000, 1200],
  [6, "Kannur", 22000, 1300, 17000, 16000, 1300],
  [7, "Alappuzha", 24000, 1400, 19000, 18000, 1500],
  [8, "Pathanamthitta", 18000, 1000, 14000, 13000, 1100],
];

// Is there any district with +ve cases > 25000 //
let value=covid_data.some((eachData)=>eachData[2]>2500)
console.log(value)


// Check every district with +ve cases > 25000 or not //
let  everyValue=covid_data.every((eachData)=>eachData>25000)

  
// // Print total number of positive cases





// District having Highest +ve case :
let district=covid_data.reduce((acc,curr)=>acc[2]>curr[2]?acc:curr)
console.log(district)


// District having Highest 1st dose vaccine  :
let highestFirstDose=covid_data.reduce((acc,curr)=>acc[5]>curr[5]?acc:curr)
console.log(highestFirstDose)


// District having lowest death :
let lowestDeath=covid_data.reduce((acc,curr)=>acc[3]>curr[3]?acc:curr)
console.log(lowestDeath)

// Sort data with +ve case in descending order :

let positiveSort=covid_data.sort((a,b)=>b[2]-a[2])
console.log(positiveSort)

// -----------------------------------------------

// Sort data with 1st dose vaccine
// let firstDoseSortArray=covid_data.sort((a,b)=>a[6]-b[6])
// console.log(firstDoseSortArray)


// Print thrissur details

let thrissur=covid_data.find((eachData)=>eachData[2]=="Thrissur"
console.log(thrissur)


// Print total number of positive cases



// Print total number of curred cases

let curredArray=covid_data.map((eachData)=>eachData=[4]))
let totalCurred=curredArray.reduce((acc,curr)=acc+curr)
console.log(totalCurred)
