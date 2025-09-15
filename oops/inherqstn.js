class Maruthi{
constructor(){
    this.type="car"        //type="car" (then no need of constructor)
    this.NoOfTyres=5       //NoOfTyres=5
}
}
class swift extends Maruthi{
    constructor(){
    super()
    this.enginetype="petrol"
    this.speedlimit=200
    }
}
let car1=new swift()
console.log(car1.enginetype)
console.log(car1.speedlimit)