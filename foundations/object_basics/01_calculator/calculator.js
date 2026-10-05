const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => 
    total + currentValue, 0,
  );
};

const multiply = function(arr) {
  return arr.reduce((total, currentVal) => total *= currentVal, 1,);
};

const power = function(a, b) {
  let tmp = 1;
  for(let i = 0; i < b; i++){
    tmp *= a;
  }
  return tmp;
};

const factorial = function(a) {
  let tmp = 1;
	for(let i = 1; i <= a; i++){
    tmp *= i;
  }
  return tmp;
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
