
/**
 * Day 2: Took a while to read the second problem correctly - remove _either_ half of an unsafe pair
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        console.log("Line " + (idx+1) + ": '" + line + "'");
        sum += counts(makeArray(line));
    });
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        //console.log("Line " + (idx+1) + ": '" + line + "'");
        sum += countDamp(makeArray(line));
    });
    return sum;
}

function counts(array) {
    console.log("Array: " + array);
    if(array[0] < array[1]) {
        console.log("Rising");
        for(var i = 1; i < array.length; i++) {
            if(array[i] - array[i-1] > 3) {
                console.log(" Too big increase");
                return 0;
            }
            if(array[i] - array[i-1] < 1) {
                console.log(" Too small increase");
                return 0;
            }
        }
    } else {
        console.log("Falling");
        for(var i = 1; i < array.length; i++) {
            if(array[i-1] - array[i] > 3) {
                console.log(" Too big decrease");
                return 0;
            }
            if(array[i-1] - array[i] < 1) {
                console.log(" Too small decrease");
                return 0;
            }
        }
    }
    return 1;
}

function countDamp(array) {
    console.log("Array: " + array);
    if(array[0] === array[1]) {
        console.log("Remove first");
        array.splice(0, 1);
        return counts(array);
    }
    if(array[0] < array[1]) {
        console.log("Rising");
        if(array[2] <= array[1]) {
            console.log("Remove first");
            //array.splice(0, 1);
            //return counts(array);
            return countLess(array, 1);
        }
        for(var i = 1; i < array.length; i++) {
            if(array[i] - array[i-1] > 3) {
                console.log(" Too big increase");
                //array.splice(i, 1);
                return countLess(array, i);
            }
            if(array[i] - array[i-1] < 1) {
                console.log(" Too small increase");
                //array.splice(i, 1);
                return countLess(array, i);
            }
        }
    } else {
        console.log("Falling");
        if(array[2] >= array[1]) {
            console.log("Remove first");
            //array.splice(0, 1);
            return countLess(array, 1);
        }
        for(var i = 1; i < array.length; i++) {
            if(array[i-1] - array[i] > 3) {
                console.log(" Too big decrease");
                //array.splice(i, 1);
                return countLess(array, i);
            }
            if(array[i-1] - array[i] < 1) {
                console.log(" Too small decrease");
                //array.splice(i, 1);
                return countLess(array, i);
            }
        }
    }
    return 1;
}

function countLess(array, idx) {
    var first = array.slice();
    first.splice(idx-1, 1);
    var second = array.slice();
    second.splice(idx, 1);
    if(counts(first) + counts(second) > 0)
        return 1;
    return 0;
}