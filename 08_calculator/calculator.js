const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 -n2
};

const sum = function(array) {
	if(array.length === 0) {
    return 0;
  }
  else {
    return array.reduce((total, current) => total + current);
  }
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(base, exponent) {
	let result = 1;

  for(let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;

  //shorter solution usin built-in Math.pow() method
  //return Math.pow(base, exponent);
};

const factorial = function(number) {
	if(number === 0) {
    return 1;
  }
    return number * factorial( number - 1);//here we used recursion
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
