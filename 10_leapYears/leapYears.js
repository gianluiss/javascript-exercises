const leapYears = function(year) {
    let isLeap = false;
    if(year % 4 != 0) {
        return false;
    } else if(year % 100 == 0 && year % 400 != 0) {
        return false;
    }
    return true;
};

/*
console.log( leapYears(2000) );
console.log( leapYears(1985) );
*/
// Do not edit below this line
module.exports = leapYears;
