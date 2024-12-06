
/**
 * Day 5: Meh. How to re-order the pages?
 */

var ruleMatch = /([0-9]+)\|([0-9]+)/g;

var preMap = new Map();

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var res;
    var idx = 0;
    do {
        res = ruleMatch.exec(text);
        //console.log(idx, res);
        if(res) {
            var list;
            if(preMap.has(res[1])) {
                //console.log("Get list for key " + res[1]);
                list = preMap.get(res[1]);
            } else {
                //console.log("New list for key " + res[1]);
                list = new Array();
                preMap.set(res[1], list);
            }
            list.push(parseInt(res[2]));
        }
        idx++;
    } while(res);
    //console.log(preMap);
    var sum = 0;
    while(idx < lines.length) {
        console.log("Test print " + lines[idx]);
        var pages = lines[idx++].split(',');
        var legal = true;
        for(var i = 1; legal && i < pages.length; i++) {
            if(preMap.has(pages[i])) {
                var list = preMap.get(pages[i]);
                //console.log(" List for " + pages[i] + ": " + list);
                for(var j = 0; j < i; j++) {
                    //console.log("  Test " + pages[j]);
                    if(list.includes(parseInt(pages[j]))) {
                        console.log(" Fails because",list,"includes",pages[j]);
                        legal = false;
                    }
                }
            }
        }
        if(legal) {
            const mid = parseInt(pages[(pages.length-1)/2]);
            console.log(" Add " + mid);
            sum += mid;
        }
    }
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var res;
    var idx = 0;
    do {
        res = ruleMatch.exec(text);
        //console.log(idx, res);
        if(res) {
            var list;
            if(preMap.has(res[1])) {
                //console.log("Get list for key " + res[1]);
                list = preMap.get(res[1]);
            } else {
                //console.log("New list for key " + res[1]);
                list = new Array();
                preMap.set(res[1], list);
            }
            list.push(parseInt(res[2]));
        }
        idx++;
    } while(res);
    //console.log(preMap);
    var sum = 0;
    while(idx < lines.length) {
        console.log("Test print " + lines[idx]);
        var pages = lines[idx++].split(',');
        var legal = true;
        for(var i = 1; legal && i < pages.length; i++) {
            if(preMap.has(pages[i])) {
                var list = preMap.get(pages[i]);
                //console.log(" List for " + pages[i] + ": " + list);
                for(var j = 0; j < i; j++) {
                    //console.log("  Test " + pages[j]);
                    if(list.includes(parseInt(pages[j]))) {
                        console.log(" Fails because",list,"includes",pages[j]);
                        legal = false;
                    }
                }
            }
        }
        if(!legal) {
            var list = order(pages);
            const mid = parseInt(list[(list.length-1)/2]);
            console.log(" Add " + mid);
            sum += mid;
        }
    }
    return sum;
}

function order(pages) {
    var list = new Array();
    console.log(" Sort", pages);
    for(var idx = 0; idx < pages.length; idx++) {
        if(list.includes(pages[idx]))
            continue;
        if(preMap.has(pages[idx])) {
            var pre = preMap.get(pages[idx]);
            for(var i = idx+1; i < pages.length; i++) {
                if(pre.includes(parseInt(pages[i])) && !list.includes(pages[i]))
                    list.push(pages[i]);
            }
            list.push(pages[idx]);
        }
    }
    console.log(" Ordered", list);
    return list;
}