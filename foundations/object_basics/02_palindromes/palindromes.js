const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g,'');
    const lowerString = cleanString.toLowerCase();
    for(let i = 0; i < lowerString.length / 2; i++){
        
        if(lowerString[i] != lowerString[lowerString.length - i - 1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
