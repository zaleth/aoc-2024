
/**
 * Day 17: Only solve first part
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        var num = parseInt(line);
        console.log("Seed: " + num);
        for(var step = 0; step < 2000; step++) {
            var val = num << 6;
            num = prune(mix(num, val));
            val = num >> 5;
            num = prune(mix(num, val));
            val = num << 11;
            num = prune(mix(num, val));
        }
        sum += num;
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

function mix(a, b) {
    return a ^ b;
}

function prune(a) {
    //return a % 16777216;
    return a & 0xFFFFFF;
}