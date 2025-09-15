let numArray=[111,10,15,16,18,21,24];
let length = numArray.length


sum=0

for(i=0;i<=length-1;i++){
    sum=sum+numArray[i]



}
avg=sum/length
console.log(avg)

lar=0
sl=null;
for(i=0;i<=length-1;i++){
    if(numArray[i]>lar){
          sl=lar
        lar=numArray[i]
      
        
    }
    else if(numArray[i]>sl&& numArray[i]<lar){
        sl=numArray[id]
    }
    



}

console.log(sl)
console.log(lar)