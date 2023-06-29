const leapYears = function(year) {
    switch (year % 4 == 0){
        case year % 100 == 0:
            if (year % 400 == 0) return true;
            else return false;
        default:
            return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
