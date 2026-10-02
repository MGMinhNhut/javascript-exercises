const convertToCelsius = function(degree) {
  let temp = (degree - 32) * 5/9;
  let result = Math.round(temp * 10) / 10;
  return result;
};  

const convertToFahrenheit = function(degree) {
  let temp = (degree * 9/5 + 32);
  let result = Math.round(temp * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
