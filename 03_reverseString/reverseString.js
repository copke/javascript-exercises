const reverseString = function(string) {
    const array = string.split("");

    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
        
    }
    
    let reversedString = newArray.join("");
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
