
const removeFromArray = function(...args) {  // ---------------- rest operator
      const array = args[0]; // ------------------------------- get the array
      return array.filter(val => !args.includes(val));
      
}


// // Do not edit below this line
module.exports = removeFromArray;     




