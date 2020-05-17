const repeatString = function(word, repetitions) {
    
    let string = ''

    if (repetitions < 0) {
        return 'ERROR'
    }

    for (let i = 0; i<repetitions; i++) {
        string += word
    }
    return string
};

module.exports = repeatString
