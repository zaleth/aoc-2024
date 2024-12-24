
/**
 * Day 24: Only part 1 solved
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    var wires = true;
    var map = new Map();
    var gates = new Array();
    lines.forEach((line, idx) => {
        if(wires) {
            if(line) {
                var [key,val] = line.split(': ');
                map.set(key, parseInt(val));
                console.log("Line " + (idx+1) + ": '" + line + "'");

            } else {
                wires = false;
            }
        } else {
            gates.push(line);
        }
    });
    console.log(map);
    while(gates.length > 0) {
        console.log("Gates left: " + gates.length);
        var left = new Array();
        var needZ = false;
        gates.forEach((line) => {
            var [a,op,b,skip,c] = line.split(' ');
            if(map.has(a) && map.has(b)) {
                console.log(a,b,a&b,a|b,a^b);
                var out;
                switch(op) {
                    case 'AND':
                        out = map.get(a) & map.get(b);
                        break;
                    case 'OR':
                        out = map.get(a) | map.get(b);
                        break;
                    case 'XOR':
                        out = map.get(a) ^ map.get(b);
                        break;
                }
                console.log("Set ",c," to ",out);
                map.set(c, out);
            } else {
                if(line.split(' -> ')[1].charAt(0) == 'z')
                    needZ = true;
                left.push(line);
            }
        });
        if(needZ)
            gates = left;
        else
            gates = new Array();
    }
    var num = [];
    map.forEach((val, key) => {
        if(key.charAt(0) == 'z') {
            console.log(key,val);
            var bits = parseInt(key.substring(1));
            num[bits] = val;
            if(val > 0) {
                sum += (1 << bits);
            }
        }
    });
    num.reverse();
    console.log(num);
    console.log(num.join(''));
    sum = parseInt(num.join(''), 2);
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    var wires = true;
    var map = new Map();
    var gates = new Array();
    lines.forEach((line, idx) => {
        if(wires) {
            if(line) {
                var [key,val] = line.split(': ');
                map.set(key, parseInt(val));
                console.log("Line " + (idx+1) + ": '" + line + "'");

            } else {
                wires = false;
            }
        } else {
            gates.push(line);
        }
    });
    console.log(map);
    while(gates.length > 0) {
        console.log("Gates left: " + gates.length);
        var left = new Array();
        var needZ = false;
        gates.forEach((line) => {
            var [a,op,b,skip,c] = line.split(' ');
            if(map.has(a) && map.has(b)) {
                console.log(a,b,a&b,a|b,a^b);
                var out;
                switch(op) {
                    case 'AND':
                        out = map.get(a) & map.get(b);
                        break;
                    case 'OR':
                        out = map.get(a) | map.get(b);
                        break;
                    case 'XOR':
                        out = map.get(a) ^ map.get(b);
                        break;
                }
                console.log("Set ",c," to ",out);
                map.set(c, out);
            } else {
                if(line.split(' -> ')[1].charAt(0) == 'z')
                    needZ = true;
                left.push(line);
            }
        });
        if(needZ)
            gates = left;
        else
            gates = new Array();
    }
    var xb = [];
    var yb = [];
    var zb = [];
    var sb = [];
    map.forEach((val, key) => {
        if(key.charAt(0) == 'x') {
            console.log(key,val);
            var bits = parseInt(key.substring(1));
            xb[bits] = val;
        } else if(key.charAt(0) == 'y') {
            console.log(key,val);
            var bits = parseInt(key.substring(1));
            yb[bits] = val;
        } else if(key.charAt(0) == 'z') {
            console.log(key,val);
            var bits = parseInt(key.substring(1));
            zb[bits] = val;
        }
    });
    xb.reverse();
    yb.reverse();
    zb.reverse();
    var x = parseInt(xb.join(''), 2);
    var y = parseInt(yb.join(''), 2);
    var z = parseInt(zb.join(''), 2);
    sum = x+y;
    console.log(sum);
    console.log(z);
    return sum;
}
