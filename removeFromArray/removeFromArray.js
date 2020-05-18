const removeFromArray = function(arr, ...args) {
    let newArray = []
    for (j=0; j<args.length; j++) {
        for (i = 0; i<arr.length; i++) {
            if (arr[i]===args[j]) {
                arr.splice(i, 1)
              }
        }
    }
    
return arr

};

module.exports = removeFromArray
