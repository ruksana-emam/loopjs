function isLeapyear(year){
    if(year%400===0)
        return true;
    if(year%100===0)
        return false;
    if(year%4===0)
        return true;
    return false;
}
console.log(isLeapyear(2024))
console.log(isLeapyear(2019))
    