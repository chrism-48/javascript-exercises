let mySum = 0;

const sumAll = function(num1, num2) { 
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
    } 
    return mySum;
    
}        
             
 // Do not edit below this line
module.exports = sumAll;     
       

// sumAll(1, 4);
// sumAll(1, 4000);
// sumAll(123, 1);
// sumAll(-10, 4);
// sumAll(10, "90");
// sumAll(10, [90, 1]);




// test('sums numbers within the range', () => {
// expect(sumAll(1, 4)).toEqual(10);
// });
// test('works with large numbers', () => {
// expect(sumAll(1, 4000)).toEqual(8002000);
// });
// test('works with larger number first', () => {
// expect(sumAll(123, 1)).toEqual(7626);
// });
// test('returns ERROR with negative numbers', () => {
// expect(sumAll(-10, 4)).toEqual('ERROR');
// });
// test('returns ERROR with non-number parameters', () => {
// expect(sumAll(10, "90")).toEqual('ERROR');
// });
// test('returns ERROR with non-number parameters', () => {
// expect(sumAll(10, [90, 1])).toEqual('ERROR');





//  -------------------------------------------------------------------------------------------------------------



// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// - Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop


// let mySum = 0

// const sumAll = function(num1, num2) {
//     const myNums = (num2 - num1);
//     for (i = num1; i < num2 + 1; i++ )  {
//         mySum = mySum + i;
//         debugger;
//         console.log(mySum);
//     }                          
//     console.log(mySum);

// };


// sumAll(1,4)



// // Do not edit below this line
// // module.exports = sumAll;
