
/**
 * Day 14: Part 1 was easy, but easter egg seems weird. What is the target picutre?
 */

var posX = new Array();
var posY = new Array();
var velX = new Array();
var velY = new Array();

const maxX = 101, maxY = 103;
const midX = (maxX-1) / 2;
const midY = (maxY-1) / 2;

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        console.log("Line " + (idx+1) + ": '" + line + "'");
        var [p,v] = line.split(' ');
        p = p.split('=')[1];
        v = v.split('=')[1];
        console.log("P: ",p,"V:",v);
        const [px,py] = p.split(',');
        const [vx,vy] = v.split(',');
        posX.push(parseInt(px));
        posY.push(parseInt(py));
        velX.push(parseInt(vx));
        velY.push(parseInt(vy));
        //sum += counts(makeArray(line));
    });
    for(var sec = 0; sec < 100; sec++)
        step();
    sum = count();
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        var [p,v] = line.split(' ');
        p = p.split('=')[1];
        v = v.split('=')[1];
        //console.log("Line " + (idx+1) + ": '" + line + "'");
        sum += countDamp(makeArray(line));
    });
    return sum;
}

function step() {
    for(var i = 0; i < posX.length; i++) {
        posX[i] += velX[i];
        if(posX[i] < 0)
            posX[i] += maxX;
        if(posX[i] >= maxX)
            posX[i] -= maxX;
        posY[i] += velY[i];
        if(posY[i] < 0)
            posY[i] += maxY;
        if(posY[i] >= maxY)
            posY[i] -= maxY;
    }
}

function count() {
    var c = [0,0,0,0];
    for(var i = 0; i < posX.length; i++) {
        if(posX[i] == midX || posY[i] == midY)
            continue;
        else if(posX[i] < midX) {
            if(posY[i] < midY) {
                c[0]++;
            } else {
                c[1]++;
            }
        } else {
            if(posY[i] < midY) {
                c[2]++;
            } else {
                c[3]++;
            }
        }
    }
    console.log(c);
    return c[0] * c[1] * c[2] * c[3];
}