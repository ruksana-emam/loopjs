class Animal{
    makeSound(){
        console.log("animal makes sound")
    }  
}
class cat extends Animal{
    makeSound(){
        console.log("meow meow")
    }
}
class dog extends Animal{
    makeSound(){
        console.log("bow bow")
    }
}
const cat1=new cat()
cat1.makeSound()
const dog1=new dog()
dog1.makeSound()