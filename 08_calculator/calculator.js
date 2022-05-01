const add = function(num1, num2) {
    let addNums = num1 + num2;
    return addNums;
  
};

const subtract = function(num1, num2) {
    let subNums = num1 - num2;
    return subNums;
};

const sum = function(arr) {
	let mySum = 0;
    for (let i = 0; i < arr.length; i++) {       
        mySum += arr[i];        
    }
    return mySum;
};

const multiply = function(arr) {
    let myMultiplied = 1;
    for (let i = 0; i < arr.length; i++) {        
        myMultiplied *= arr[i] ;      
    }
    return myMultiplied;
};

const power = function(num1, num2) {
    let myPower = num1 ** num2;
    return myPower;
	
};

const factorial = function(num) {
    if (num < 0) 
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
   
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};







