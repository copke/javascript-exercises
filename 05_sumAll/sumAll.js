const sumAll = function(n1, n2) {
    let total = 0;
    if(n1 < 0 || n2 < 0) {
       return "ERROR";
    }
    else if(!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }
    else if(n1 < n2) {
        for(let i = n1; i <= n2; i++) {
            total += i;
        }
        return total;
    }
    else {
        for(let i = n1; i >= n2; i--) {
            total += i;
        }
        return total;
    }   
};

// Do not edit below this line
module.exports = sumAll;
