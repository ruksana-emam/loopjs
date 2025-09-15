class parent {
  //properties
  constructor() {
    this.name = "luminar";
    this.location = "trivandrum";
  }
  //methods
  printDetails() {
    console.log(this.name, this.location);
  }
}
class Child extends parent{
        studentsCount=40;
}
//this is child and to get parent properties
const c1=new Child()
console.log(c1.name)
console.log(c1.location)
//this is the parent to get child properties but it wont work
const c=new parent()
console.log(c.studentsCount)