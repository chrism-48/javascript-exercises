const ftoc = function(temp) {   // fahrenheit to celsius ----------------  [°C] = ([°F] − 32) × 5 ⁄ 9
  let convertedTemp = (temp - 32) * 5/9;
  // console.log(Math.round(convertedTemp * 10) / 10);
  return (Math.round(convertedTemp * 10) / 10);
};

const ctof = function(temp) {   // celsius to fahrenheit ----------------  [°F] = [°C] × 9 ⁄ 5 + 32 
  let convertedTemp = temp * 9/5 + 32;
  // console.log(Math.round(convertedTemp * 10) / 10);
  return (Math.round(convertedTemp * 10) / 10);
};  


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};






