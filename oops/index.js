class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    print(){
        console.log(this.name)
    }
}
const obj=new Person("Sarath",80)
obj.print()