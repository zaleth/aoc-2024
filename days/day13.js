
/**
 * Day 13: Equation solver, hooray
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    for(var i = 0; i < lines.length; i++) {
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        const [ax, ay] = getAB(lines[i++]);
        console.log("X=" + ax + " Y=" + ay);
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        var [bx, by] = getAB(lines[i++]);
        console.log("X=" + bx + " Y=" + by);
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        var [tx, ty] = getAB(lines[i++],'=');
        console.log("X=" + tx + " Y=" + ty);
        var xEq = ax + '*a+' + bx + "*b=" + tx;
        var yEq = ay + '*a+' + by + "*b=" + ty;
        console.log(xEq, yEq);
        const res = nerdamer.solveEquations([xEq, yEq]);
        const a = res[0][1];
        const b = res[1][1];
        console.log(a,b);
        if(parseInt(a) == parseFloat(a) && parseInt(b) == parseFloat(b)) {
            console.log(" Cost: " + (3*a + b));
            sum += (3*a + b);
        } else {
            console.log(" No solution");
        }
    }
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    for(var i = 0; i < lines.length; i++) {
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        const [ax, ay] = getAB(lines[i++]);
        console.log("X=" + ax + " Y=" + ay);
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        var [bx, by] = getAB(lines[i++]);
        console.log("X=" + bx + " Y=" + by);
        //console.log("Line " + (i+1) + ": '" + lines[i] + "'");
        var [tx, ty] = getAB(lines[i++],'=');
        tx += 10000000000000;
        ty += 10000000000000;
        console.log("X=" + tx + " Y=" + ty);
        var xEq = ax + '*a+' + bx + "*b=" + tx;
        var yEq = ay + '*a+' + by + "*b=" + ty;
        console.log(xEq, yEq);
        const res = nerdamer.solveEquations([xEq, yEq]);
        const a = res[0][1];
        const b = res[1][1];
        console.log(a,b);
        if(parseInt(a) == parseFloat(a) && parseInt(b) == parseFloat(b)) {
            console.log(" Cost: " + (3*a + b));
            sum += (3*a + b);
        } else {
            console.log(" No solution");
        }
    }
    return sum;
}

function getAB(line, sep = '+') {
    var vals = line.split(': ')[1].split(', ');
    const x = parseInt(vals[0].split(sep)[1]);
    const y = parseInt(vals[1].split(sep)[1]);
    return [x, y];
}

function minimize(ax, ay, bx, by, tx, ty, cx, cy) {
    var a, b;
}