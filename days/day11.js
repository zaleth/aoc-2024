
/**
 * Day 11: Part 2 needs a better solution, I hit max array length at iteration #42
 */

function solve1(text) {
    var array = text.split(' ');
    for(var i = 0; i < 25; i++) {
        setCounter("Blink " + (i+1));
        console.log("Array: " + array);
        array = blink(array);
    }
    var sum = array.length;
    return sum;
}

function solve2(text) {
    var array = text.split(' ');
    for(var i = 0; i < 75; i++) {
        setCounter("Blink " + (i+1));
        console.log("Array (" + (i+1) + "): " + array.length);
        array = blink(array);
    }
    var sum = array.length;
    return sum;
}

function blink(array) {
    var out = new Array();
    array.forEach((number) => {
        //console.log(" " + number + " (len: " + number.length + ")");
        if(number == 0)
            out.push('1');
        else if(number.length % 2 == 0) {
            var left = parseInt(number.substring(0, number.length / 2));
            var right = parseInt(number.substring(number.length / 2));
            out.push(left.toString());
            out.push(right.toString());
        } else {
            out.push((number * 2024).toString());
        }
    });
    return out;
}