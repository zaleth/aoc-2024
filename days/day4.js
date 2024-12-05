/**
 * Day 4: Fairly simple matrix search. Some boundary issues.
 */

function solve1(text) {
    var sum = 0;
    var lines = text.split('\n');
    const maxRow = lines.length;
    console.log("Got " + maxRow + " lines");
    for(var row = 0; row < maxRow; row++) {
        const maxCol = lines[row].length;
        for(var col = 0; col < maxCol; col++) {
            if(lines[row].charAt(col) == 'X') {
                console.log("Found X at row " + row + ", col " + col);
                // Right across
                if(col < (maxCol - 3) && lines[row].charAt(col+1) == 'M') {
                    if(lines[row].charAt(col+2) == 'A') {
                        if(lines[row].charAt(col+3) == 'S') {
                            sum++;
                        }
                    }
                }
                // Straight down
                if(row < (maxRow - 3) && lines[row+1].charAt(col) == 'M') {
                    if(lines[row+2].charAt(col) == 'A') {
                        if(lines[row+3].charAt(col) == 'S') {
                            sum++;
                        }
                    }
                }
                // Right down
                if(row < (maxRow - 3) && col < (maxCol - 3) && lines[row+1].charAt(col+1) == 'M') {
                    if(lines[row+2].charAt(col+2) == 'A') {
                        if(lines[row+3].charAt(col+3) == 'S') {
                            sum++;
                        }
                    }
                }
                // Left up
                if(row >= 3 && col >= 3 && lines[row-1].charAt(col-1) == 'M') {
                    if(lines[row-2].charAt(col-2) == 'A') {
                        if(lines[row-3].charAt(col-3) == 'S') {
                            sum++;
                        }
                    }
                }
                // Left across
                if( col >= 3 && lines[row].charAt(col-1) == 'M') {
                    if(lines[row].charAt(col-2) == 'A') {
                        if(lines[row].charAt(col-3) == 'S') {
                            sum++;
                        }
                    }
                }
                // Straight up
                if(row >= 3 && lines[row-1].charAt(col) == 'M') {
                    if(lines[row-2].charAt(col) == 'A') {
                        if(lines[row-3].charAt(col) == 'S') {
                            sum++;
                        }
                    }
                }
                // Left down
                if(row < (maxRow - 3) && col >= 3 && lines[row+1].charAt(col-1) == 'M') {
                    if(lines[row+2].charAt(col-2) == 'A') {
                        if(lines[row+3].charAt(col-3) == 'S') {
                            sum++;
                        }
                    }
                }
                // Right up
                if(row >= 3 && lines[row-1].charAt(col+1) == 'M') {
                    if(lines[row-2].charAt(col+2) == 'A') {
                        if(lines[row-3].charAt(col+3) == 'S') {
                            sum++;
                        }
                    }
                }
            }
        }
    }
    return sum;
}

function solve2(text) {
    var sum = 0;
    var lines = text.split('\n');
    for(var row = 1; row < lines.length-1; row++) {
        for(var col = 1; col < lines[row].length-1; col++) {
            if(lines[row].charAt(col) == 'A') {
                if((lines[row-1].charAt(col-1) == 'M' && lines[row+1].charAt(col+1) == 'S') || (lines[row-1].charAt(col-1) == 'S' && lines[row+1].charAt(col+1) == 'M'))
                    if((lines[row-1].charAt(col+1) == 'M' && lines[row+1].charAt(col-1) == 'S') || (lines[row-1].charAt(col+1) == 'S' && lines[row+1].charAt(col-1) == 'M'))
                        sum++;
            }
        }
    }
    return sum;
}
