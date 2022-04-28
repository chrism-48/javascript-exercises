
const sumAll = function(num1, num2) { 
    let mySum = 0;
    if (typeof num1 === 'string' || typeof num2 === 'string') {    
        return 'ERROR';
    } else if (typeof num1 === 'object' || typeof num2 === 'object') {    
        return 'ERROR';
    } else if (num1 < 0 ||  num2 < 0) {    
        return 'ERROR';
    } else if (num2 > num1 === true) {
        num2 - num1;
        for (let i = num1; i < num2 + 1; i++) {
            mySum = mySum + i; 
        }  
    } else if (num1 > num2 === true) {
        num1 - num2;
        for (let j = num2; j < num1 + 1; j++) {
            mySum = mySum + j;           
        }    
    }
    return mySum;   
}


 // Do not edit below this line
module.exports = sumAll;     
       

