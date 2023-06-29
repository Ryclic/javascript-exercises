const repeatString = function(message, number) {
    if(number < 0){
        return "ERROR";
    }

    let repeatedString = '';
    
    for(let i = 0; i < number; i++){
        repeatedString += message;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
