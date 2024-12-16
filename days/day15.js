
/**
 * Day 15: Got surprisingly far before I found the infinite loop I had created ...
 */

var map;
var posX, posY;

function solve1(text) {
    map = new Array();
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var i = 0;
    for(; lines[i].length > 0; i++) {
        console.log(lines[i]);
        if(lines[i].indexOf('@') > 0) {
            posX = lines[i].indexOf('@');
            posY = i;
        }
        map.push(lines[i]);
    }
    console.log("Robot: " + posX + "," + posY);
    i++;
    for(; i < lines.length; i++) {
        console.log("Order line " + lines[i]);
        for(var j = 0; j < lines[i].length; j++)
            move(lines[i].charAt(j));
    }
    var sum = score();
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

function move(dir) {
    console.log(" Move: " + dir);
    switch(dir) {
        case '<':
            var x = posX;
            var running = true;
            while(x > 0 && running) {
                x--;
                switch(map[posY].charAt(x)) {
                    case '.':
                        console.log("Found space");
                        running = false;
                    case 'O':
                        break;
                    case '#':
                        console.log("Stuck");
                        return;
                }
            }
            if(!running) {
                map[posY] = map[posY].replaceAt(x,'O').replaceAt(posX--, '.').replaceAt(posX, '@');
                drawMap();
            }
            break;
        case '^':
            var y = posY;
            var running = true;
            while(y > 0 && running) {
                y--;
                switch(map[y].charAt(posX)) {
                    case '.':
                        console.log("Found space");
                        running = false;
                    case 'O':
                        break;
                    case '#':
                        console.log("Stuck");
                        return;
                }
            }
            console.log("Running: " + running);
            if(!running) {
                map[y] = map[y].replaceAt(posX,'O');
                map[posY] = map[posY].replaceAt(posX, '.');
                posY--;
                map[posY] = map[posY].replaceAt(posX, '@');
                drawMap();
            }
            break;
        case '>':
            var x = posX;
            var running = true;
            while(x < map[posY].length && running) {
                x++;
                switch(map[posY].charAt(x)) {
                    case '.':
                        console.log("Found space");
                        running = false;
                    case 'O':
                        break;
                    case '#':
                        console.log("Stuck");
                        return;
                }
            }
            if(!running) {
                map[posY] = map[posY].replaceAt(x,'O').replaceAt(posX++, '.').replaceAt(posX, '@');
                drawMap();
            }
            break;
        case 'v':
            var y = posY;
            var running = true;
            while(y < map.length && running) {
                y++;
                switch(map[y].charAt(posX)) {
                    case '.':
                        console.log("Found space");
                        running = false;
                    case 'O':
                        break;
                    case '#':
                        console.log("Stuck");
                        return;
                }
            }
            if(!running) {
                map[y] = map[y].replaceAt(posX,'O');
                map[posY] = map[posY].replaceAt(posX, '.');
                posY++;
                map[posY] = map[posY].replaceAt(posX, '@');
                drawMap();
            }
            break;
    }
}

function score() {
    var sum = 0;
    for(var i = 1; i < map.length; i++) {
        for(var j = 1; j < map[i].length; j++) {
            if(map[i].charAt(j) == 'O')
                sum += 100*i+j;
        }
    }
    return sum;
}

function drawMap() {
    for(var i = 0; i < map.length; i++) {
        console.log(map[i]);
    }
}