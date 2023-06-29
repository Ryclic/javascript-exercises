const sumAll = function(a, b) {
    if(!(a > 0 && b > 0 && typeof a == 'number' && typeof b == 'number')){
        return "ERROR";
    }

    if(b > a){
        num1 = a;
        num2 = b;
    }
    else{
        num1 = b;
        num2 = a;
    }

    let summation = 0;
    for (let i = num1; i <= num2; i++){
        summation += i;
    }
    return summation;
};
// Do not edit below this line
module.exports = sumAll;
