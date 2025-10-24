const convertToCelsius = function(fahrenheit) {
  return Number( ( (fahrenheit - 32) * 5/9 ).toFixed(1) );
};

const convertToFahrenheit = function(celsius) {
  return Number( ( (celsius * 9/5) + 32 ).toFixed(1) );
};

/*
// celsius to fahrenheit
console.log( (0 * 9/5) + 32 );

// fahrenheit to celsius
console.log( (32 - 32) * 5/9 );
*/

console.log( convertToCelsius(100) );

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
