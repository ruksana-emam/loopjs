const checkPrime = (num) =>{
    isPrime=true;
    if(num<=1){
        return false;
    }

for(i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}
return isPrime;
}

checkPrime(3)?console.log("prime"):console.log("notprime")
