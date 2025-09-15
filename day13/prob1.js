let array=[11,23,56,76]

const checkNum=(searchKey)=>{
  let isFound=false;    //flag
  for(let value of array){
   if(value==searchKey){
    isFound=true;
   }
  }
  isFound==true?console.log("found"):console.log("not found")
}
checkNum(56)