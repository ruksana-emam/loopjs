// w.a.p to find the vowels in a string

let string="hellowOrld"
let vowels=['a','e','i','o','u','A','E','I','O','U']
let array=string.split('')
count=0;
array.forEach((eachLetter)=>{
    vowels.forEach((eachVowels)=>{
        if(eachLetter==eachVowels){
            count++;
        }

    })
    
})
console.log(count)
