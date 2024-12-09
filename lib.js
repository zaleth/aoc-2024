

/**
 * Splits a string of numbers.
 * @param {string} line String to split
 * @param {string} [delim=' '] Delimiter to split (default space)
 * @returns An array of integers
 */
function makeArray(line, delim = ' ') {
    var array = new Array();
    line.split(delim).forEach((num) => {
        if(num.trim().length > 0)
            array.push(parseInt(num.trim()));
    });
    return array;
}

function printNum(val) {
    var str = '';
    while(val > 1000) {
        var part = val % 1000;
        if(part < 10)
            str = '00' + part + ',' + str;
        else if(part < 100)
            str = '0' + part + ',' + str;
        else
            str = part + ',' + str;
        val = parseInt(val / 1000);
    }
    if(val > 0)
        str = val + ',' + str;
    return str.slice(0,-1);
}
