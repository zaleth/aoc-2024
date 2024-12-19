
/**
 * Day 19: No smart solution for part 2, no patience for the brute force
 */

var towels;

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    towels = lines[0].split(', ');
    var sum = 0;
    for(var i = 2; i < lines.length; i++) {
        console.log("Match " + lines[i]);
        sum += match(lines[i]);
    }
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + (lines.length-2));
    towels = lines[0].split(', ');
    console.log("# of towels: " + towels.length);
    var sum = 0;
    for(var i = 2; i < lines.length; i++) {
        console.log(new Date().toString().split(' ')[4] + ": " + lines[i]);
        sum += match2(lines[i]);
    }
    return sum;
}

function match(str) {
    var found = false;
    if(!str)
        return 1;
    for(var i = 0; i < towels.length; i++) {
        if(str.startsWith(towels[i])) {
            var ret = match(str.substring(towels[i].length));
            if(ret) {
                console.log(" " + towels[i]);
                found = true;
                break;
            }
        }
    }
    return found ? 1 : 0;
}

function match2(str) {
    var sum = 0;
    if(!str)
        return 1;
    for(var i = 0; i < towels.length; i++) {
        if(str.startsWith(towels[i])) {
            sum += match2(str.substring(towels[i].length));
        }
    }
    return sum;
}
