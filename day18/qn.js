
  for (let row = 0; row < 5; row++) {
    str=""
    for(col=0;col<5;col++){
        
    if(row==col||col==5-row-1){    // or we can use (row==col || row+col==4)
        str+="*"
    }
    else{
         str+=" "
        }
}
console.log(str)
}

