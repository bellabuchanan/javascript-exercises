const sumAll = function(start, stop) {
    
    if (start<0 || stop < 0) {
        return 'ERROR'
    }

    if (typeof start !== "number" || typeof stop !== "number") {
        return 'ERROR'
    }

    let sum = 0
    let smaller = start
    let larger = stop

    
    if (start > stop) {
        smaller = stop
        larger = start
    }
    for (let i = smaller; i<larger+1; i++) {
        sum += i
    }
    return sum
}

module.exports = sumAll
