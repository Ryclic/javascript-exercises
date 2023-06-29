const removeFromArray = function(targetArr, number) {
    for(let i = 1; i <= arguments.length; i++){
        currentNum = arguments[i];
        for (let j = 0; j < targetArr.length; j++){
            if(targetArr[j] === currentNum){
                targetArr.splice(j, 1);
            }
        }
    }

    return targetArr;
};

// Do not edit below this line
module.exports = removeFromArray;
