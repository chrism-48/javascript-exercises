const palindromes = function (str) {
    let regX = /[\W_]/g;
    let lowCase = str.toLowerCase().replace(regX, '');
    let revStr = lowCase.split('').reverse().join('');
    return revStr === lowCase;
};

// Do not edit below this line
module.exports = palindromes;
