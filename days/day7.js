
/**
 * Day 7: No solution
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    var res;
    lines.forEach((line, idx) => {
        const [total, parts] = line.split(':')
        const res = counts(total, makeArray(parts));
        if(res.length > 0) {
            sum += parseInt(total);
            console.log("Line " + (idx+1) + ": " +  printNum(sum) + " (" + res + "=" + total + ")");
        }
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

function counts(total, array) {
    if(array.length == 0)
        return '';
    if(array.length == 1) {
        if(array[0] == total)
            return total;
        return '';
    }
    // cant get small enough
    if(array.reduce( (tot, val) => tot + val) > total)
        return '';
    // cant get large enough
    if(array.reduce( (tot, val) => tot * val, 1) < total)
        return '';
    var list = array.slice(1);
    list[0] += array[0];
    var res = counts(total, list);
    if(res.length > 0)
        return array[0] + '+' + res;
    list[0] -= array[0];
    list[0] *= array[0];
    res = counts(total, list);
    if(res.length > 0)
        return array[0] + '*' + res;
    return '';
}