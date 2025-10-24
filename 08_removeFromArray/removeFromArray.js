const removeFromArray = function(arr, ...removables) {
    return arr.filter( (item) => {
        for(let remove of removables) {
            if(item === remove)
                return false;
        }
        return true;
    })
};

//console.log( removeFromArray([1, 2, 3, 4], 3) );

// Do not edit below this line
module.exports = removeFromArray;
