
/**
 * Day 6: Wow, how even to start with part two?
 */

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0, row, col;
    var face = '^';
    for(var y = 0; y < lines.length; y++) {
        //console.log(y, lines[y].length);
        var line = '';
        for(var x = 0;y < lines.length && x < lines[y].length; x++) {
            // guard starts facing north
            if(lines[y].charAt(x) == '^') {
                console.log("Guard starts at (" + y + "," + x + ")");
                row = y;
                col = x;
                x = lines[y].length;
                y = lines.length;
            } else {
                line += lines[y].charAt(x);
            }
        }
    }
    
    while(row >= 0 && col >= 0 && row < lines.length && col < lines[row].length) {
        console.log("Step (" + sum + ")");
            switch(face) {
                case '^':
                    if(row > 0 && lines[row-1].charAt(col) == '#') {
                        console.log(" Turn at (" + row + "," + col + ")");
                        face = '>';
                    }else {
                        if(lines[row].charAt(col) != 'X') {
                            lines[row] = lines[row].replaceAt(col, "X");
                            sum++;
                        }
                        row--;
                    }
                    break;
                case '<':
                    if(col > 0 && lines[row].charAt(col-1) == '#') {
                        console.log(" Turn at (" + row + "," + col + ")");
                        face = '^';
                    }else {
                        if(lines[row].charAt(col) != 'X') {
                            lines[row] = lines[row].replaceAt(col, "X");
                            sum++;
                        }
                        col--;
                    }
                    break;
                case 'v':
                    if(row < (lines.length - 1) && lines[row+1].charAt(col) == '#') {
                        console.log(" Turn at (" + row + "," + col + ")");
                        face = '<';
                    }else {
                        if(lines[row].charAt(col) != 'X') {
                            lines[row] = lines[row].replaceAt(col, "X");
                            sum++;
                        }
                        row++;
                    }
                    break;
                case '>':
                    if(col < (lines[row].length - 1) && lines[row].charAt(col+1) == '#') {
                        console.log(" Turn at (" + row + "," + col + ")");
                        face = 'v';
                    }else {
                        if(lines[row].charAt(col) != 'X') {
                            lines[row] = lines[row].replaceAt(col, "X");
                            sum++;
                        }
                        col++;
                    }
                    break;
            }
    }
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    return sum;
}

// Thanks StackOverflow for how to extend a builtin class
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}