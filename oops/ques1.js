//create a class that accepts  name and monthly salary

//create a method which prints annual salary of that prson with name

class Person {
    
  constructor(name, salary) {
    this.Empname = name;
    this.Monthlysalary = salary;
  }

  //method
  caluclate() {
    console.log(
      `Hi ${this.Empname} your annual salary is ${this.Monthlysalary * 12}`
    );
  }
}

//instance creation//object creation

let emp1 = new Person("ruksana", 2000);
emp1.caluclate();