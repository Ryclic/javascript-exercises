const reverseString = function(message) {
    let reversedString = "";
    for (let i = message.length; i >= 0; i--){
        reversedString += message.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
