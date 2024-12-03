
/**
 * Day 3: Quite easy thanks to RegExp. Took some StackOverflow surfing to find how to extract multiple results.
 */
const mulPattern = /mul\(([0-9]+,[0-9]+)\)/g;
const mulCondPattern = /mul\(([0-9]+),([0-9]+)\)|do\(\)|don't\(\)/g;

function solve1(text) {
    var res;
    var sum = 0;
    
    do {
        res = mulPattern.exec(text);
        if(res) {
            console.log(res.index + ": " + res[1]);
            var parts = res[1].split(',');
            sum += parseInt(parts[0]) * parseInt(parts[1]);
        }
    } while(res);
    return sum;
}

function solve2(text) {
    var res;
    var sum = 0;
    var enable = true;
    do {
        res = mulCondPattern.exec(text);
        if(res) {
            if(res[0].startsWith("don't"))
                enable = false;
            else if(res[0].startsWith("do"))
                enable = true;
            else if(enable)
                sum += parseInt(res[1]) * parseInt(res[2]);
        }
    } while(res);
    return sum;
}
