
/**
 * Day 1: We start easy this year
 */
var left, right;

function solve1(text) {
    console.log("Got " + text);
    parse(text);
    left.sort();
    right.sort();
    var sum = 0;
    for(var i = 0; i < left.length; i++)
        sum += Math.abs(left[i] - right[i]);
    return sum;
}

function solve2(text) {
    console.log("Got " + text);
    parse(text);
    var sum = 0;
    for(var i = 0; i < left.length; i++)
        sum += left[i] * counts(right, left[i]);
    return sum;
}

function parse(text) {
    left = new Array();
    right = new Array();
    console.log('Type; ' + typeof text.split('\n'));
    text.split('\n').forEach((line, idx) => {
        var words = line.split(' ');
        console.log('Words: ' + words.length);
        left.push(words[0]);
        var i = 1;
        while(i < words.length && words[i].length === 0)
            i++;
        if(i >= words.length)
            console.log("FAIL: only one number on line");
        else
            right.push(words[i]);
    });
}

function counts(array, value) {
    var sum = 0;
    array.forEach((val, idx) => {
        if(val === value)
            sum++;
    });
    return sum;
}