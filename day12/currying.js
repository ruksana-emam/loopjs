// normal function
// function add(a,b){
// return a+b;
// }
 //console.log(add(2,3));


 //function currying 
//  function add(a){
//     return function (b){
//         console.log(a+b)
//     }
//  }
//  add (5)(10)

//using arrow function

const add=(a)=>{
    return(b)=>{
        console.log(a+b)
    }
}
add (5) (10)