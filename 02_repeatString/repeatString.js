let myString;
const repeatString = function(string, num) {
    if (num >= 0) {
      myString = string.repeat(num);
    } else if (num < 0) {
        myString = "ERROR"
    }
    return myString;
};


// Do not edit below this line
module.exports = repeatString;
