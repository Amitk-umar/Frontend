const prompt = require('prompt-sync')()

//Start from here 
// debugger
let n  = Number(prompt("Enter a Number: "))
function isPronic(n){
    for(let x = 0 ; x <= Math.sqrt(n) ; x++){
        if(x*(x+1) === n){
            return true
        }
    }
    return false
}

if(isPronic(n)){
    console.log(`${n} is a Pronic Number`);
}
else{
    console.log(`${n} is not a Pronic Number`);
}